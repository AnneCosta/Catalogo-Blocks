/* eslint-disable react/prop-types */
import { Component } from 'react'
import { ArrowUpRight } from 'react-feather'

export default class index extends Component {
	render() {
		return (
			<section style={{ backgroundImage: `url(${this.props.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} className='relative border border-borderCol w-[170px] h-60 rounded-lg bg-slate-400 p-4 m-2'>

				<section className='absolute bottom-0 rounded-b-lg w-full left-0 bg-[#fefefe] pl-2 py-1 border-t border-borderCol'>
					<div className='flex justify-between items-center'>
						<p className='text-[10px] font-semibold line-clamp-3 w-[110px] leading-tight'>
							{this.props.name}
						</p>
						<div className='border-l pl-2 pr-2 h-10 flex items-center'>
							<ArrowUpRight color='#202020' size='22' />
						</div>
					</div>
				</section>

			</section>
		)
	}
}
