<template>
        <fieldset>
            <div id="createAccount">
               <div id="login-row" class="row justify-content-center align-items-center">
                   <form @submit.prevent="register">
                        <div class="form-group">
                            <input id="name" type="text" class="form-control" placeholder="Nome" v-model="user.name" required>
                        </div>
                        <div class="form-group">
                            <input id="cpf" type="int" class="form-control" placeholder="CPF" v-model="user.cpf" required>
                         </div>
                        <div class="form-group">
                            <input id="email" type="email" class="form-control" placeholder="E-mail" v-model="user.email" required>
                         </div>
                        <div class="form-group">
                            <input id="password" type="password" class="form-control" placeholder="Senha" v-model="user.password" required>
                        </div>
                        <div class="form-group">
                            <button id="registerBtn" class="btn btn-success" type="submit">ABRIR MINHA CONTA</button>
                        </div>
                   </form>
               </div>  
            </div>
        </fieldset>
    
</template>

<script src='./register.js'></script>

