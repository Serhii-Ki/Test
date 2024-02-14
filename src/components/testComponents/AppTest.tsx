import { useState } from 'react';

function AppTest() {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	return (
		<div>
			<div onClick={() => setCollapsed(!collapsed)}>
				{collapsed ? 'close' : 'open'}
			</div>
			{collapsed && (
				<div>
					<p>Some text</p>
					<p>Some text</p>
					<p>Some text</p>
					<p>Some text</p>
					<p>Some text</p>
				</div>
			)}
		</div>
	);
}

export default AppTest;
