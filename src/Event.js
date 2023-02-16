
import React from "react";

class Eventreact extends React.Component {
    constructor(){
        super();
        this.state = {
            nama : 'aguss'
        }
    }
    kirimpesan(nama){
        alert('kirim pesan kepada ' + nama);
    }

    ubahtulisan(e){
        e.target.innerHTML = 'Kirim Pesan';
    }
    kembalikanlagi(e){
        e.target.innerHTML = 'Click Me';
    }

    sapa(e) {
        this.setState({nama : e.target.value})
    }
    render() {
        return (
            <div>
                {/* membuat event di react harus menggunakan camelCase dan membuat perintah nya harus menggunakan arrow function*/}
                {/* <button onClick={() => alert('hallo world')} >Click Me</button> */}

                {/* <button onClick={this.kirimpesan.bind(this, 'bambang')}>Kirim Pesan tanpa arrow function</button> */}
                {/* <button onClick={(e) => this.kirimpesan('agus', e)}>Kirim Pesan menggunakan arrow function</button> */}
                {/* <button onClick={this.kirimpesan.bind(this, 'andi')} onMouseEnter={(e) => this.ubahtulisan(e)} onMouseOut={this.kembalikanlagi.bind(this)}>Click Me</button> */}
                <h1>Hallo : {this.state.nama}</h1>
                <input type={'text'} onChange={this.sapa.bind(this)}/>
            </div>
        )
    }
}

export default Eventreact;