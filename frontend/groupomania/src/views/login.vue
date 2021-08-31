<script>

export default {
	name: 'login'
}
</script>

<template>
    <form>	
    <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3">
        </div>
    </div>
    <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Mot de passe</label>
        <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3">
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Connexion</button>
    </form>
</template>
<style scoped>
    form
    {
        background-color: #ffd7d7;
        padding-right: 20px;
        padding-left: 20px;
    }
</style>