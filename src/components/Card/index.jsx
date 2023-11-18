/* eslint-disable react/prop-types */
import { Component } from "react";
import { ArrowUpRight } from "react-feather";

export default class index extends Component {
   render() {
      return (
         <div>
            <section className="aspect-h-5 aspect-w-1 w-full overflow-hidden rounded-md h-60 lg:aspect-none group-hover:opacity-75 justify-center flex p-2">
               <img
                  src={this.props.image}
                  className=" object-contain object-center w-full"
               />
            </section>
            <section className="mt-4 flex justify-between border-t w-full border-borderCol rounded-lg h-10">
               <h3 className="text-sm text-gray-700 p-2 line-clamp-1 leading-loose">
                  <a href="#">
                     <span
                        aria-hidden="true"
                        className="absolute inset-0 overflow-hidden"
                     ></span>
                     {this.props.name}
                  </a>
               </h3>
               <div className="flex justify-center items-center border-l">
                  <p className="text-sm font-medium text-gray-900 pl-2 pr-2 flex items-center">
                     <ArrowUpRight color="#202020" size="22" />
                  </p>
               </div>
            </section>
         </div>
      );
   }
}
