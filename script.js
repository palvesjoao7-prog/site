const selectSerie = document.getElementById('serie');
const blocoLingua = document.getElementById('bloco-segunda-lingua');
const radiosLingua = document.querySelectorAll('input[name="segunda_lingua"]');

selectSerie.addEventListener('change', function(){
    if(this.value==='5ano'){
        blocoLingua.style.display= 'block';
    }else{
        blocoLingua.style.display = 'none';
        radiosLingua.forEach(r = r.checked = false);
    }
});

document.getElementById('nascimento').addEventListener('change',function()){
    const nascimento = new Date(this.value);
    const hoje = new Date();
    if(!this.value){
        document.getElementById('idade').value = '';
    }
    let anos = hoje.getFullYear() - nascimento.getFullYear();
    document.getElementById('idade').value = `${anos}anos` ;
};

const campoCep = document.getElementById('cep');

campoCep.addEventListener('input',function(){
    let valor = this.value.replace();
    if(valor.length > 5){
        valor = valor.slice(0,5) + '-' +valor.slice(5,8);


    }
    this.value = valor;
});
    document.getElementById('cpf').addEvenListerner('input',function(e){
        let valor = e.target.value.replace(/\D/g,'');
        
        if(value.length <=11){
            value = value
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})(\d{1,2})/,'$1-$2');
        }
    
    e.target.value = value;
    });
    document.getElementById('matricula').addEventListener('input',function(e){
        let valor = e.target.value.replace(/\d/g,'');
        if(valor.length <=6){
            valor = valor
            .replace(/(\d{2})(\d)/,'$1.$2')
            .replace(/(\d{2})(\d)/,'$1.$2');
        }
        e.target.value= value;
        
    });
    campoCep.addEventListener('blur', function(){
        const cepLimpo = this.value.replace(/\D/g,'');
        if(cepLimpo.length !==8){
           if(cepLimpo.lenght >0){
            alert('CEP digitado é invalido');
           }
    
    return;
        }
    fetch(`https://viacep.com.br/ws/${cepLimpo}/json`)
        .then(r => {
            if(!r.ok) throw new Error('Erro na Rede!');
            alert('cep não encontrado!');
            return r.json();
        })

        console.log(dados);
        document.getElementById('logradouro').value = dados.logradouro || '';
        document.getElementById('bairro').value = dados.bairro || '';
        document.getElementById('cidade').value = dados.cidade || '';
        document.getElementById('estado').value = dados.estado || '';
        document.getElementById('ibge').value = dados.ibge || '';
    });

        