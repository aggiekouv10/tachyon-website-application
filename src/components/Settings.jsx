/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function Settings() {
	const [ color, setColor ] = useState('');
	const [ image, setImage ] = useState('');
	const [ footer, setFooter ] = useState('');
	return (
		<div className="w-full mt-6 md:mt-0  mt:px-0 mx-6 rounded-lg border border-slate-400 shadow sm:rounded-lg md:ml-[16rem] md:w-[32rem] lg:w-[48rem] 2xl:w-[64rem] md:min-w-[32rem]">
			<div className="rounded-lg border-b border-gray-200 bg-slate-800 px-4 py-5 sm:px-6">
				<h3 className="text-lg font-medium leading-6 text-white">Embed Editor</h3>
				<p className="mt-1 text-sm text-gray-500">Make your webhooks flavourful and truly yours.</p>
			</div>
			<div className="px-4 py-5 sm:p-6">
				<h3 className="text-lg font-medium leading-6 text-white">Update your embed looks here</h3>
				<form className="mt-1 sm:flex sm:flex-col sm:items-center">
					<div className="w-full ">
						<div className="mt-2 max-w-xl text-sm text-gray-200">
							<p className="font-bold">Embed Color</p>
						</div>
						<input
							value={color}
							onChange={(e) => {
								setColor(e.target.value);
							}}
							className="block w-full rounded-md border border-slate-400 bg-slate-900 p-4 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							placeholder="#000000"
						/>
                        <div className="flex text-sm text-white gap-4 mt-2">Preview: <div style={{backgroundColor: color}} className={`w-6 border h-6`}></div></div>
					</div>
					<div className="w-full ">
						<div className="mt-2 max-w-xl text-sm text-gray-200">
							<p className="font-bold">Embed Image</p>
						</div>
						<input
							value={image}
							onChange={(e) => {
								setImage(e.target.value);
							}}
							className="block w-full rounded-md border border-slate-400 bg-slate-900 p-4 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							placeholder="https://example.com/image.png"
						/>
                                                <div className="flex text-sm text-white gap-4 mt-2">Preview: <img src={image} alt="preview" style={{backgroundColor: color}} className={`w-6 border h-6`}/></div>
					</div>
					<div className="w-full ">
						<div className="mt-2 max-w-xl text-sm text-gray-200">
							<p className="font-bold">Embed Footer</p>
						</div>
						<input
							value={footer}
							onChange={(e) => {
								setFooter(e.target.value);
							}}
							className="block w-full rounded-md border border-slate-400 bg-slate-900 p-4 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							placeholder="Powered by Tachyon"
						/>
					</div>
					<button
						type="submit"
						className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent  bg-[#53b3e9] px-4 py-2 font-medium text-white shadow-sm hover:bg-blue-400 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-6 sm:text-sm"
					>
						Save
					</button>
				</form>
			</div>
		</div>
	);
}
