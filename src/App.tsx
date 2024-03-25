import './app.css';

import AppTest from "./components/testComponents/AppTest";
import Timer from "./components/testComponents/Timer";
import {RenderImproveApp} from "./components/renderImprove/RenderImprove";

function App() {
	return (
		<div className='app'>
			<RenderImproveApp/>
		</div>
	);
}

export default App;
