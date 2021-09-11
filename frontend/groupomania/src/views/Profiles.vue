<script>
import HeaderForum from '../components/HeaderForum.vue';
import ForumPosts from '../components/ForumPosts.vue';
export default {
  name: 'Profiles',
    beforeMount(){
    fetch('http://localhost:3000/api/posts/getPostsByNickname/'+this.nickname,{
      method :'GET',
       headers : {
              'Authorization' : 'Bearer '+ localStorage.getItem('token'),
          }
    })
    .then(posts=> posts.json())
    .then(json=>{
      if (json.error ==='Requête non authentifiée')
      {
        alert('Veuillez vous connecter');
        this.$router.push('login');
      }
      else
      {
        this.postsProfile = json;
      }
    })
    .catch(err=> console.log (err));
  },
  data (){
    return {
        nickname: window.location.href.split('profiles:')[1],
        postsProfile : null,
    }
  },
  components : {
    HeaderForum,ForumPosts
  },
  methods : {
    }
  }
</script>


<template>
  <div class="profile">
    <HeaderForum />
    <img src="../assets/images/profil_inconnu.png">
    <p id='userNickname'>{{this.nickname}}</p>
    <h2>Articles : </h2>
    <ForumPosts :postsList='this.postsProfile'/> 
  </div>
</template>


<style scoped lang='scss'>
#userNickname
{
  font-weight: bold;
  font-size: 25px;
}
</style>