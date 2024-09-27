document.addEventListener("DOMContentLoaded",function(event){

    var noti=document.querySelector('h1');
    var select=document.querySelector('.select');
    var buttons=document.querySelectorAll('button');

    noti.addEventListener('click',() => {
        window.location.href='../panier1.html';
    });

    for (var i=0;i<buttons.length;i++) {
        
        buttons[i].addEventListener('click',(e) => {
            window.location.href='produit.html';
            /*var count=parseInt(noti.getAttribute('data-count') || 0);
            var add=Number(noti.getAttribute('data-count') || 0);
            noti.setAttribute('data-count',add+1);
            
            noti.classList.add('zero');
            */
        
        /*const pg=require('pg');
        const pool=new pg.Pool({
            user:'',
            host:'localhost',
            database:'panier',
            password:'',
            port:8080
        });

        async function operations(){
            const client = await pool.connect();
            let res = await client.query ("SELECT * FROM vetement");
            for(row of res.rows){
                console.log(row.id_utilisateur);
                console.log(row.type);
            }
        }
       
*/
        });
        
    }
    //operations();*/
    
});