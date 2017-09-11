#region Using declarations
using System;
using System.ComponentModel;
using System.Drawing;
using NinjaTrader.Cbi;
using NinjaTrader.Data;
using System.Collections.Generic;
using NinjaTrader.Indicator;
using NinjaTrader.Strategy;
using System.Collections.Generic;
#endregion

// This namespace holds all strategies and is required. Do not change it.
namespace NinjaTrader.Strategy
{
    /// <summary>
    /// This file holds all user defined strategy methods.
    /// </summary>
	/// 
	/// https://github.com/tazotodua/other-projects/tree/master/trading-platform-libraries/NT7
	/// from any strategy, refer with-->   MyStrategyMethodsTT my = new MyStrategyMethodsTT();    my.FunctionName .....
	public class MyStrategyMethodsTT{

		public Strategy strategy {set; get;}
		
		public int TimeframeInMinutes(Period bp){
			int x=0;
			PeriodType bpi = bp.Id; 
			int bpv=bp.Value;
			// http://ninjatrader.com/support/helpGuides/nt7/zordertype.htm?barsperiod.htm
			if(bpi==PeriodType.Second)	{ x= Convert.ToInt32(bpv/60);	}
			if(bpi==PeriodType.Minute)	{ x= bpv*1;				}
			if(bpi==PeriodType.Day)		{ x= bpv*1440;			}
			if(bpi==PeriodType.Week)	{ x= bpv*1440*7;		}
			if(bpi==PeriodType.Month)	{ x= bpv*1440*7*30;		}
			if(bpi==PeriodType.Year)	{ x= bpv*1440*7*30*12;	} 
			return x;
		}
		public bool IsTimeChart(Period bp){
			PeriodType bpi = bp.Id;  
			return (bpi==PeriodType.Second ||  bpi==PeriodType.Minute ||  bpi==PeriodType.Day ||  bpi==PeriodType.Week ||  bpi==PeriodType.Month ||  bpi==PeriodType.Year);
		}
		
		public bool enableDebugLog {set; get;}
		public void Print(string message)		{ if(enableDebugLog)	{ strategy.Print("["+this.strategy.Name+"] -------- " + message); }	}
		  
		public  string SanitizeSymbol(string symb){
			return (symb.Replace("/","_").Replace("\\","_").Replace("|","_").Replace("*","_")).ToUpper();
		}
		
		public Color brushcolor_from_hex(string hex_str){
			return Color.Red; // return  new BrushConverter().ConvertFromString(hex_str) as Color ;//(Color)ColorConverter.ConvertFromString(hex_str);
		}
		
		public void Alert(string message){
			strategy.Alert("myAlert", NinjaTrader.Cbi.Priority.High, message, "Alert1.wav", 10, Color.Black, Color.Yellow);
		}
		
		public string[] orderSlugs {set; get;}
		public int[] contractsAmnt {set; get;}
		public Dictionary<string, double> _prices {set; get;}
		
		//private string word {set;get;}	public string hi(){ return word; }	public string x(){ return word; }
		
		public IOrder MyOrder(string type_, string B_or_S_, int Num ) {  
			IOrder result = null;
			string B_or_S_opposite_ = B_or_S_=="B" ? "S" : "B";
 			string entryName= OrderName("entry", B_or_S_, Num) ;
			string exitName = OrderName("exit", B_or_S_, Num) ;
			if(type_=="Enter"){
				result =  (B_or_S_ == "B" ? 
					strategy.EnterLong(contractsAmnt[Num], entryName )
						:
					strategy.EnterShort(contractsAmnt[Num], entryName )
				);
				//DrawText("tag1"+CurrentBar, type_ + B_or_S_+":"+_prices["shouldEntryAt_"+B_or_S_].ToString()+"\n"+Close[0].ToString(), 0, High[0]*1.04, Color.Blue);
			}
			else if(type_=="Enter_Stop"){
				result =  (B_or_S_ == "B" ? 
					strategy.EnterLongStop(contractsAmnt[Num], _prices["shouldEntryAt_"+B_or_S_], entryName )
						:
					strategy.EnterShortStop(contractsAmnt[Num], _prices["shouldEntryAt_"+B_or_S_], entryName )
				);
				//DrawText("tag1"+CurrentBar, type_ + B_or_S_+":"+_prices["shouldEntryAt_"+B_or_S_].ToString()+"\n"+Close[0].ToString(), 0, High[0]*1.04, Color.Blue);
			}
			else if(type_=="Exit"){ 
				result=  ( B_or_S_ ==  "B" ? 
					strategy.ExitLong(contractsAmnt[Num], exitName, entryName )
						:
					strategy.ExitShort(contractsAmnt[Num], exitName, entryName )
				); 
				//DrawText("tag1"+CurrentBar, type_+ B_or_S_+":", 0, Low[0]*0.97, Color.Green);
			} 
			else if(type_=="Exit_Stop"){ 
				result=  ( B_or_S_ ==  "B" ? 
					strategy.ExitLongStop( contractsAmnt[Num], _prices["shouldExitAt_"+B_or_S_],  exitName, entryName )
						:
					strategy.ExitShortStop(contractsAmnt[Num], _prices["shouldExitAt_"+B_or_S_], exitName, entryName )
				); 
				//DrawText("tag1"+CurrentBar, type_+ B_or_S_+":", 0, Low[0]*0.97, Color.Green);
			} 
			return result;
		}
	
		public string OrderName(string action_, string B_or_S_, int Num) {  return action_+"_"+B_or_S_+"_"+orderSlugs[Num];  }
		
		//enableRoundPrice
		public double MyRoundPrice(double MyVal)	{ return( true ?  strategy.Bars.Instrument.MasterInstrument.Round2TickSize(MyVal) : MyVal);}
		public string FormatPrice(double value)	{ return strategy.Bars.Instrument.MasterInstrument.FormatPrice(value);  }
	
	
		public string ChartType(){
			string result ="";
			if(strategy.BarsPeriod.Id == PeriodType.Tick)			{ result="Tick"; }
			else if(strategy.BarsPeriod.Id == PeriodType.Volume)	{ result="Volume"; }
			else if(strategy.BarsPeriod.Id == PeriodType.Range)		{ result="Range"; }
			else if(strategy.BarsPeriod.Id == PeriodType.Second)	{ result="Second"; }
			else if(strategy.BarsPeriod.Id == PeriodType.Minute)	{ result="Minute"; }
			else if(strategy.BarsPeriod.Id == PeriodType.Day)		{ result="Day"; }
			else if(strategy.BarsPeriod.Id == PeriodType.Week)		{ result="Week"; }
			else if(strategy.BarsPeriod.Id == PeriodType.Month)		{ result="Month"; }
			else if(strategy.BarsPeriod.Id == PeriodType.Year)		{ result="Year"; }
			else if(strategy.BarsPeriod.BasePeriodType == PeriodType.Kagi)		{ result="Kagi"; }
			else if(strategy.BarsPeriod.BasePeriodType == PeriodType.LineBreak)	{ result="LineBreak"; }
			else if(strategy.BarsPeriod.BasePeriodType == PeriodType.PointAndFigure){ result="PointAndFigure"; }
			else if(strategy.BarsPeriod.Id == PeriodType.Renko)		{ result="Renko"; }
			else	{ result="unknown_"; }
			return result;	
		}
		
	
	
	
	}

    partial class Strategy
    {
	  // this is same as if you defined withing a strategy
		private Dictionary <int, DEMA> dema_val =  new Dictionary <int, DEMA>();
		private Dictionary <int, EMA> ema_val =  new Dictionary <int, EMA>();
		private Dictionary <int, HMA> hma_val =  new Dictionary <int, HMA>();
			//KAMA
			//MAMA
		private Dictionary <int, SMA> sma_val =  new Dictionary <int, SMA>();
			//T3
		private Dictionary <int, TMA> tma_val =  new Dictionary <int, TMA>();
		private Dictionary <int, TEMA> tema_val =  new Dictionary <int, TEMA>();
			//TRIX
			//VMA
		private Dictionary <int, VWMA> vwma_val =  new Dictionary <int, VWMA>();
		private Dictionary <int, WMA> wma_val =  new Dictionary <int, WMA>();
		private Dictionary <int, ZLEMA> zlema_val =  new Dictionary <int, ZLEMA>();
			//MACD
		
	  //call this in initialize, like: AddMyMa("EMA" /enum.ToString(),  Color.Red, 14, 0,  Close);
		public void AddMyMa(string maType, Color ma_Color, int ma_Length, int plotN, IDataSeries input){
			if		( maType == "DEMA")		{ dema_val[plotN]	= DEMA(input,ma_Length);	Add(dema_val[plotN]);	dema_val[plotN].Plots[0].Pen.Color = ma_Color; }
			else if	( maType == "EMA")		{ ema_val[plotN]	= EMA(input,ma_Length);		Add(ema_val[plotN]);	ema_val[plotN].Plots[0].Pen.Color = ma_Color; }
			else if	( maType == "HMA")		{ hma_val[plotN]	= HMA(input,ma_Length);		Add(hma_val[plotN]);	hma_val[plotN].Plots[0].Pen.Color = ma_Color; }
								//KAMA
								//MAMA
			else if	( maType == "SMA")		{ sma_val[plotN]	= SMA(input,ma_Length);		Add(sma_val[plotN]);	sma_val[plotN].Plots[0].Pen.Color = ma_Color; }
								//T3
			else if	( maType == "TEMA")		{ tema_val[plotN]	= TEMA(input,ma_Length);	Add(tema_val[plotN]);	tema_val[plotN].Plots[0].Pen.Color = ma_Color; }
								//TRIX
								//VMA
			else if	( maType == "VWMA")		{ vwma_val[plotN]	= VWMA(input,ma_Length);	Add(vwma_val[plotN]);	vwma_val[plotN].Plots[0].Pen.Color = ma_Color; }
			else if	( maType == "WMA")		{ wma_val[plotN]	= WMA(input,ma_Length);		Add(wma_val[plotN]);	wma_val[plotN].Plots[0].Pen.Color = ma_Color; }
			else if	( maType == "ZLEMA")	{ zlema_val[plotN]	= ZLEMA(input,ma_Length);	Add(zlema_val[plotN]);	zlema_val[plotN].Plots[0].Pen.Color = ma_Color; }	
								//MACD
		}

		//add this inside OnBarUpdate:    double myMaValue = MaValueAssign("EMA", 0, 0);
		public double MaValueAssign( string maType, int plotN, int displace){
			double result = 
				( maType == "DEMA"		? dema_val[plotN][displace] :
				( maType == "EMA"		? ema_val[plotN][displace]  :
				( maType == "HMA"		? hma_val[plotN][displace]  :
				//KAMA
				//MAMA
				( maType == "SMA"		? sma_val[plotN][displace]  :
				//T3
				( maType == "TEMA"		? tema_val[plotN][displace]  :
				//TRIX
				//VMA
				( maType == "VWMA"		? vwma_val[plotN][displace]  :	
				( maType == "WMA"		? wma_val[plotN][displace]  :	
				( maType == "ZLEMA"		? zlema_val[plotN][displace]  :
				//MACD	
					0 ) ) ) ) ) ) ) ) ;
			return result;
		}
					
		//if(ShowProfitLossWindow) {
		//	double TotalGross_ = Performance.AllTrades.TradesPerformance.GrossProfit - Performance.AllTrades.TradesPerformance.GrossLoss;
					//if (Position.MarketPosition != MarketPosition.Flat)       Print("Open PnL: " + Position.GetProfitLoss(Close[0], PerformanceUnit.Points));
		//	StrategyPlot(0).Value.Set(TotalGross_);
		//}
		
    }
}
