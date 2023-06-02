import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';

import { HomePage } from './pages/HomePage';
// import { BrowserRouter, Routes, Route} from 'react-router-dom'; Импорт старого синтаксиса 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Header } from './components/Header/Header';  
import { ToDo } from './models/todo-item';
// import { NotFound } from './pages/404';  
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/Layouts';
import { NotFound } from './pages/404';





const todos: ToDo[] = [
	{
		id: 0, 
		text: 'Первое действие',
		isDone: true
	},
	{
		id: 1, 
		text: 'Второе действие',
		isDone: false
	},
	{
		id: 2, 
		text: 'Третье действие',
		isDone: true
	},
	{
		id: 3, 
		text: 'Четвертое действие',
		isDone: false
	}
]

//Новый синтаксис роутинга
const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		errorElement: <NotFound/>,
		children: [
			{
				path: '/',
				element: <HomePage todos={todos}/>
			},
			{
				path: '/todo',
				element: <ToDoListPage />
			},
			{
				path: '/list/:id',
				element: <ItemDescription todos={todos}/>
			}
		]
	},
	{
		path: '*',
		element: <NotFound/>
	}
], {basename: '/app/'})


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>

		
			<RouterProvider router={router}/>
		{/* Это старый синтаксис */}
		{/* <BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<HomePage todos={todos}/>}></Route>
				<Route path='/list/:id' element={<ItemDescription todos={todos}/>}></Route>
				<Route path='/todo' element={<ToDoListPage />}></Route>
				<Route path='*' element={<NotFound/>}></Route>
			</Routes>
		</BrowserRouter> */}
		
	</React.StrictMode>
	
);

 

