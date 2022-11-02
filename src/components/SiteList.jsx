import { useEffect, useState } from 'react';
import Image from 'next/future/image';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-features.jpg';
import screenshotExpenses from '@/images/screenshots/expenses.png';
import screenshotPayroll from '@/images/screenshots/payroll.png';
import screenshotReporting from '@/images/screenshots/reporting.png';
import screenshotVatReturns from '@/images/screenshots/vat-returns.png';

export function SiteList() {
	return (
		<section id="sitelist" className="relative overflow-hidden flex flex-col items-center justify-center bg-slate-900 pt-20 pb-28 sm:py-32">
			<h2 className="font-display text-3xl tracking-tight text-slate-200 sm:text-4xl">
				Featured sites
			</h2>
			<p className="mt-4 text-lg tracking-tight text-slate-400">
				A plethora of sites that we know you will need. There is so much more beyond these, too.
			</p>
			<div className="mt-24 grid grid-cols-4 gap-4 px-12">
				<div>
					<img src="/1.png" />
				</div>
				<div>
					<img src="/2.png" />
				</div>
				<div>
					<img src="/3.png" />
				</div>
				<div>
					<img src="/4.png" />
				</div>{' '}
				<div>
					<img src="/5.png" />
				</div>
				<div>
					<img src="/6.png" />
				</div>
				<div>
					<img src="/7.png" />
				</div>
				<div>
					<img src="/8.png" />
				</div>
			</div>
		</section>
	);
}
