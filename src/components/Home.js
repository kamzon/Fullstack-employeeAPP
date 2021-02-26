import react,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export class Home extends Component{

    render(){
        return(
            <div className = "mt-5 d-flex justify-content-left">
                <h3>
                    Welcome to employee managment portal. this is the home page.
                </h3>
            </div>
        )
    }
}