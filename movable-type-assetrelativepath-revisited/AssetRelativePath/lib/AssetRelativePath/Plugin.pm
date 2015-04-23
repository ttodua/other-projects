package AssetRelativePath::Plugin;
use strict;
use warnings;
sub hdlr_asset_relative_url {
   my ($eh, $app, $param, $tmpl) = @_;
   $param->{'upload_html'} =~ s!https?://[^/]+!!g;
   $param->{ upload_html } =~ s!https?://[^/]+!!g;
   1;
}
1;
