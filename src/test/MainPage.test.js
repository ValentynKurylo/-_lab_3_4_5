import { render, screen, fireEvent } from '@testing-library/react';
import MainPage from "../components/mainPge/MainPage";
import React from "react";
import Products from "../components/Products/Products";
import Login from "../components/users/login/login";
import {Provider} from "react-redux";
import {store} from "../Redux/store";
import Registration from "../components/users/registration/Registration";
import Product from "../components/Products/Product";
import AddProduct from "../components/Products/addProduct";
import BuyProduct from "../components/Products/BuyProduct";
import UpDateProduct from "../components/Products/UpDateProduct";
import Demand from "../components/demand/Demand";
import PostDemand from "../components/demand/postDemand";


describe('mainPage', () => {
    test('name', () => {
        render(
            <MainPage />);
        const linkElement = screen.getByText(/kurylo pharmacy/i);
        expect(linkElement).toBeInTheDocument();
    })
    test('buttonProducts', () => {
        render(<MainPage/>);
        const buttonProducts = screen.getByText(/products/i);
        expect(buttonProducts).toBeInTheDocument()
    })
    test('buttonOrder', () => {
        render(<MainPage/>);
        const buttonOrder = screen.getByText(/order/i);
        expect(buttonOrder).toBeInTheDocument()
    })
    test('buttonLogin', () => {
        render(<MainPage/>);
        const buttonLogin = screen.getByText(/login/i);
        expect(buttonLogin).toBeInTheDocument()
    })
    test('buttonReg', () => {
        render(<MainPage/>);
        const buttonReg = screen.getByText(/registration/i);
        expect(buttonReg).toBeInTheDocument()
    })
})
describe('Products', ()=>{
    test('ourProducts',  ()=>{
      render(<Provider store={store}><Products/></Provider>)
        const b = screen.getByText(/our products/i);
        expect(b).toBeInTheDocument()
    })
})
describe('Product', ()=>{
    test('price',  ()=>{
        let item = 41
      render(<Provider store={store}><Product item={item}/></Provider>)
        const b = screen.getByText(/price - grn/i);
        expect(b).toBeInTheDocument()
    })
    test('Buy',  ()=>{
        let item = 41
      render(<Provider store={store}><Product item={item}/></Provider>)
        const b = screen.getByText(/buy/i);
        expect(b).toBeInTheDocument()
    })
})
describe('Login', ()=>{
    test('main', () => {
        render( <Provider store={store}><Login/></Provider>);
        const buttonLogin = screen.getByText(/sign in/i);
        expect(buttonLogin).toBeInTheDocument()
    })
    test('main1', () => {
        render( <Provider store={store}><Login/></Provider>);
        const buttonLogin = screen.getByText(/enter/i);
        expect(buttonLogin).toBeInTheDocument()
    })
    test('username', ()=>{
      render(
          <Provider store={store}><Login/></Provider>
        );
      const inputUsername = screen.getByTestId('username');
    fireEvent.change(inputUsername, { target: { value: 'U1' } });
    expect(inputUsername.value).toBe('U1');
    })
    test('password', ()=>{
      render(
          <Provider store={store}><Login/></Provider>
        );
      const inputPassword = screen.getByTestId('password');
    fireEvent.change(inputPassword, { target: { value: '11122233' } });
    expect(inputPassword.value).toBe('11122233');
    })
    test('test login submit button', () => {
    render(
        <Provider store={store}><Login/></Provider>

    );
    const submit = screen.getByTestId('submit-login');
    fireEvent.click(submit);
});
})

describe('Registration', ()=>{
    test('sign in', () => {
        render( <Provider store={store}><Registration/></Provider>);
        const buttonLogin = screen.getByText(/sign in/i);
        expect(buttonLogin).toBeInTheDocument()
    })
    test('main', () => {
        render( <Provider store={store}><Registration/></Provider>);
        const buttonLogin = screen.getByText(/registration/i);
        expect(buttonLogin).toBeInTheDocument()
    })
    test('username', ()=>{
      render(
          <Provider store={store}><Registration/></Provider>
        );
      const inputUsername = screen.getByTestId('username1');
    fireEvent.change(inputUsername, { target: { value: 'valentyn' } });
    expect(inputUsername.value).toBe('valentyn');
    })
    test('login', ()=>{
      render(
          <Provider store={store}><Registration/></Provider>
        );
      const inputUsername = screen.getByTestId('login1');
    fireEvent.change(inputUsername, { target: { value: 'valentyn@gmail.com' } });
    expect(inputUsername.value).toBe('valentyn@gmail.com');
    })
    test('password', ()=>{
      render(
          <Provider store={store}><Registration/></Provider>
        );
      const inputPassword = screen.getByTestId('password1');
    fireEvent.change(inputPassword, { target: { value: '11122233' } });
    expect(inputPassword.value).toBe('11122233');
    })
    test('test button', () => {
    render(
        <Provider store={store}><Registration/></Provider>
    );
    const s = screen.getByTestId('sub');
    fireEvent.click(s);
});
})

describe('UpDate Product', ()=>{
    test('upDate',  ()=>{
      render(<Provider store={store}><UpDateProduct/></Provider>)
        const b = screen.getByText(/update/i);
        expect(b).toBeInTheDocument()
    })
    test('name', ()=>{
      render(
          <Provider store={store}><UpDateProduct/></Provider>
        );
      const inputUsername = screen.getByTestId('name1');
    fireEvent.change(inputUsername, { target: { value: 'qqqq' } });
    expect(inputUsername.value).toBe('qqqq');
    })
})
describe('Add Product', ()=>{
    test('add',  ()=>{
      render(<Provider store={store}><AddProduct/></Provider>)
        const b = screen.getByText(/add product/i);
        expect(b).toBeInTheDocument()
    })
    test('name', ()=>{
      render(
          <Provider store={store}><AddProduct/></Provider>
        );
      const inputUsername = screen.getByTestId('name');
    fireEvent.change(inputUsername, { target: { value: 'qqqq' } });
    expect(inputUsername.value).toBe('qqqq');
    })
})

describe('Demand', ()=>{
    test('demand',  ()=>{
      render(<Provider store={store}><Demand/></Provider>)
        const b = screen.getByText(/people want/i);
        expect(b).toBeInTheDocument()
    })
})
describe('Post Demand', ()=>{
    test('demand',  ()=>{
      render(<Provider store={store}><PostDemand/></Provider>)
        const b = screen.getByText(/Order what you want/i);
        expect(b).toBeInTheDocument()
    })
    test('demand',  ()=>{
      render(<Provider store={store}><PostDemand/></Provider>)
        const b = screen.getByText(/send/i);
        expect(b).toBeInTheDocument()
    })
     test('name', ()=>{
      render(
          <Provider store={store}><PostDemand/></Provider>
        );
      const inputUsername = screen.getByTestId('name3');
    fireEvent.change(inputUsername, { target: { value: 'qqqq' } });
    expect(inputUsername.value).toBe('qqqq');
    })
})