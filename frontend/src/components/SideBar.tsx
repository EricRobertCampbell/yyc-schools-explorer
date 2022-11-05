import type { $TSFixMe } from '../types';
import './SideBar.css';
import testImage from '../assets/images/chris-liverani-ViEBSoZH6M4-unsplash.jpg';

const FirstComponent = () => {
	return <p>I am the first component</p>;
};
const SecondComponent = () => {
	return (
		<div>
			<h2>Second Component</h2>
			<figure>
				<img
					style={{ width: '100%', height: 'auto' }}
					src={testImage}
					alt="taking a test"
				/>
				<figcaption>
					Photo by{' '}
					<a href="https://unsplash.com/@chrisliverani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Chris Liverani
					</a>{' '}
					on{' '}
					<a href="https://unsplash.com/s/photos/test?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
						Unsplash
					</a>{' '}
				</figcaption>
			</figure>
		</div>
	);
};
const ThirdComponent = () => {
	return (
		<div>
			<h2>Third Component</h2>
			<p>Lorem ipsum</p>
		</div>
	);
};
interface SideBarProps {
	setComponent: $TSFixMe;
}
export const SideBar = ({ setComponent }: SideBarProps) => {
	const actualSetComponent = (func: () => any) => {
		setComponent(() => func);
	};
	return (
		<div className="sidebar">
			<ul>
				<li key="first">
					<button
						type="button"
						onClick={() => {
							actualSetComponent(FirstComponent);
						}}
					>
						First Component
					</button>
				</li>
				<li key="second">
					<button
						type="button"
						onClick={() => {
							actualSetComponent(SecondComponent);
						}}
					>
						Second Component
					</button>
				</li>
				<li key="third">
					<button
						type="button"
						onClick={() => {
							actualSetComponent(ThirdComponent);
						}}
					>
						Third Component
					</button>
				</li>
			</ul>
		</div>
	);
};
