<script>
import Headerlogin from "../components/Headerlogin.vue"
export default {
	name: 'signup',
    components: {Headerlogin}
}
</script>

<template>
     <div class="signup">
        <Headerlogin />
        <div class="card">
            <form>
                <div class="form-group row d-flex justify-content-center">
                <div class="col-8">
                    <label for="InputNickname">Pseudo</label>
                    <input type="text" class="form-control" id="InputNickname" placeholder="Pseudo">
                </div>
                </div>
                <div class="form-group row d-flex justify-content-center">
                <div class="col-8">
                <label for="InputEmail">Email</label>
                <input type="email" class="form-control" id="InputEmail" placeholder="Email">
                </div>
                </div>
                <div class="form-group row d-flex justify-content-center">
                <div class="col-8">
                <label for="InputPassword">Mot de passe</label>
                <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe">
                </div>
                </div>
                <button type="submit" class="btn btn-primary mt-3 mb-3">S'inscrire</button>
            </form>
        </div>
     </div>
</template>
<style scoped>
.card
{
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 20px;
  background-color: #ffd7d7;
}

</style>