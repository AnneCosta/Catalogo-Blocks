import { Component } from 'react'
import { ArrowRight } from 'react-feather'
import "./css/styles.css"

export default class index extends Component {
	render() {
		return (
			<button className='flex rounded-lg justify-between p-2.5 borderButton w-52'>
				<p className='text-textSec text-sm font-medium'>
					Quero ser Premium
				</p>
				<div className='borderLine pl-2'>
					<ArrowRight color='#fff' size="22" />
				</div>
		</button>
		)
	}
}
