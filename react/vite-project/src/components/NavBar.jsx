import React,{Component} from "react";
class NavBar extends Component{
    render(){
        return(
            <>
                <nav 

                className="bg-gray-300 text-3xl px-6 py-4 flex justify-between items-center h-16">
                    NavBar
                    <a className="bg-gray-600 px-2  text-white rounded-full" href="">
                        <span>{this.props.totalCounter}</span>
                    </a>
                </nav>
            </>
        )
    }
}
export default NavBar;