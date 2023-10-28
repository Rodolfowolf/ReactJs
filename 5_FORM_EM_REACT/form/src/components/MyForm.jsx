import { useState } from 'react';
import './MyForm.css';

const MyForm = ({user}) => {
    // 6 - controlled inputs
    // 3 - gerenciamento de dados.
    const [name, setName] = useState(user ? user.name : '');
    const [email,setEmail] = useState(user ? user.email : '');

    const [bio,setBio] = useState(user ? user.bio : '')
    
    const [role,setRole] = useState(user ? user.role : '')

    const handleName = (e) =>{
        //console.log(e.target.value);
        setName(e.target.value)
    };
    console.log(name);
    console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulario");
        console.log(name, email, bio, role);
        // validacao
        // envio
        // 7 - limpar form
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };

  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>            
            </div>
            {/*2 - label envolvendo inpute */}
            <label>
                <span>E-mail:</span>
                {/* 4 - simplificacao de manipulacao de estate*/}
                <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descricao do usuario' onChange={(e)=> setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Funcao no sistema: </span>
                <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm