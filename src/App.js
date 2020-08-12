import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './App.css';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';
import CodeCard from './Components/CodeCard';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
            problems : [],
        }
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal(){
        let flag = !(this.state.isOpen);
        this.setState({isOpen : flag});
    }
    componentDidMount(){
        fetch('https://codeforces.com/api/problemset.problems')
        .then((data)=>{
            return data.json();
        })
        .then((data)=>{
            let problems = data.result.problems;
            let indices = Array.from({
                length : 10
            }, () => Math.floor(Math.random()*200));
            let newProblems = problems.filter((elem,ind) => {
                return indices.includes(ind);
            });
            this.setState({problems : newProblems});
        })
        .catch((err) => {throw err});
        
    }
    render() {
        
        let view = 'Loading...';
        let cards =[];
        cards = this.state.problems.map((problem,ind) => (
            <CodeCard
            name = {problem.name}
            tags = {problem.tags}
            difficulty = {problem.rating}
            key = {ind}
            />
        ));
        if (cards.length > 0){
            view = cards;
        }
        const style = {
            color : 'white'
        }
        return (
            <div className="container-full">
                <div className={this.state.isOpen? "modal-view" : "container-no-modal"}>
                    <Navbar 
                    onClick = {this.handleModal}
                    />
                    <div className="cards" style={style} >
                        {view}
                    </div>
                </div>
                
                
                <Modal
                onClick = {this.handleModal}
                isOpen = {this.state.isOpen}
                />
            </div>
        );
    }
}



export default App;