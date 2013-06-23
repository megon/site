require 'newrelic_rpm'
require 'new_relic/rack/agent_hooks'
require 'new_relic/rack/browser_monitoring'
require 'new_relic/rack/error_collector'

use NewRelic::Rack::AgentHooks
use NewRelic::Rack::BrowserMonitoring
use NewRelic::Rack::ErrorCollector


use Rack::Static, 
  :urls => ["/css", "/images", "/js"],
  :root => "public"

run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/index.html', File::RDONLY)
  ]
}