function mygold(){
    let goldZakat=document.getElementById('zakatvalue').value;
    if (goldZakat>7.5){
        document.getElementById('heading').innerText=goldZakat*120000/40;
    }else{
        document.getElementById('heading').innerText=("zakat is not");
    }
    }
    function mysilver(){
        let silverZakat=document.getElementById('zakatamount2').value;
        if (silverZakat>52.2){
            document.getElementById('hh').innerText=silverZakat*1500/40;
        }else{
            document.getElementById('hh').innerText=("zakat is not");
        }
    
    }
    function myCash(){
        let cashZakat=document.getElementById('Cashvalue').value;
        if (cashZakat>50000){
            document.getElementById('gh').innerText= cashZakat/40;
        }else{
            document.getElementById('gh').innerText=("zakat is not");
        }
    }
    
    
    