import { useState } from "react";

const Object = () => {
    // STATE
    let [mtr, setMtr] = useState({
      merek: "HONDA",
      jenis: "ADV160",
      warna: "merah",
      bensin: 20,
      harga: 30000000,
      plat: "D3452AB",
      status: "OFF",

      // Method
      nyalakan: () => {
        console.log("Mesin menyala");
        console.log(mtr);
        setMtr( data => {
            return{
                ...data,
                status : 'ON',
                bensin : data.bensin - 5,
            }
        })
        console.log(mtr.status);
      },

      matikan: () => {
        console.log("matikan mesin");
        console.log(mtr);
        setMtr(data => {
            return{
                ...data,
                status: 'OFF'
            }
        } )
      },
      isibensin: () => {
        console.log("Isi bensin Motor");
        console.log(mtr);
        setMtr(data => {
            return{
                ...data,
                bensin : data.bensin +5,
            }
        })
      }
    });

    // OBJECT
    const motor = {
        // Property
        merek : "HONDA",
        jenis : "ADV160",
        warna : "merah",
        bensin : "bensin",
        harga : 30000000,
        plat : "D3452AB",
        status : "OFF",

        // Method
        nyalakan : () => {
            console.log('Mesin menyala');
            motor.status = "ON";
            console.log(motor.status)
        }
    }

    return(
        <div>
            <h1>Motor</h1>
            <ul>
                <li>Merek : {mtr.merek}</li>
                <li>Jenis : {mtr.jenis}</li>
                <li>Warna : {mtr.warna}</li>
                <li>Bensin : {mtr.bensin} L</li>
                <li>Harga : {mtr.harga}</li>
                <li>Plat : {mtr.plat}</li>
                <li>Status : {mtr.status}</li>
            </ul>
            <button onClick={() => mtr.nyalakan()}>Nyalakan Mesin</button>
            <button onClick={mtr.matikan}>Matikan Mesin</button>
            <button onClick={() => mtr.isibensin()}>Isi Bensin Motor</button>
        </div>
    )
}

export default Object;