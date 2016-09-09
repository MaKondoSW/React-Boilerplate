const React = require('react')
const ReactDOM = require('react-dom')



// App_cmp
let App = React.createClass({
	getInitialState: function(){
		return{
			'sdfs' : {
				name: 'Carlos',
				lastName: 'Gonzalez',
				img: 'http://lorempixel.com/output/people-q-c-640-480-4.jpg',
				desc: 'django, css, html, js, React'
			},
			'asdf' : {
				name: 'Jonathan',
				lastName: 'Blanco',
				img: 'http://lorempixel.com/output/people-q-c-640-480-4.jpg',
				desc: 'django, css, html, js, React'
			},
			'3sdfsd' : {
				name: 'Carlos',
				lastName: 'Regardiz',
				img: 'http://lorempixel.com/output/people-q-c-640-480-4.jpg',
				desc: 'django, css, html, js, React'
			}
		}
	},
	render : function(){
		return(
			<div className = 'app-cmp'>
				<Form />
				<List items = {this.state} />
			</div>
		)
	},
})

// Form_cmp

let Form = React.createClass({
	render : function(){
		return (
		<div className='form-cmp'>
			<form >
				<input className='name' type='text' placeholder='Name'/>
				<input className='lastname' type='text' placeholder='lastName'/>
				<input className='img' type='text' placeholder='Image url'/>
				<textarea className='description' placeholder='Description'>
				</textarea>
				<button>Add</button>
			</form>
		</div>
		)
	}
})

// List_cmp

let List = React.createClass({
	renderItem: function(key){
		return <Item item={this.props.items[key]} key = {key}/>
	},
	render : function(){
		return(
		<div className='list-cmp'>
			<ul>
			 	{
					Object.keys(this.props.items).map(this.renderItem)
				}
			</ul>
		</div>
		)
	}
})

// Item_cmp

let Item = React.createClass({
	render : function(){
		var item = this.props.item
		return(
			<li >
				<span> {item.name} </span>
				<span>Description</span>
				Image
			</li>
		)
	}
})


ReactDOM.render(<App/>, document.getElementById('app'))
