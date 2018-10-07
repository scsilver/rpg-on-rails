// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import ReactOnRails from 'react-on-rails'
import GameWindow from 'scott-craft-2d/src/Display/GameWindow.jsx'

ReactOnRails.register({GameWindow})
