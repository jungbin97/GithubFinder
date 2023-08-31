const github = new Github;
const ui = new UI;

const searchUser = document.querySelector(".searchUser");

searchUser.addEventListener("keyup", (e) =>{
    const userText = e.target.value;
    console.log(userText);

    if(userText !== ''){
        github.getUser(userText)
        .then(data =>{
            console.log(data);
            if(data.profile.message === "Not Found"){
                //
            } else{
                //profile HTML 렌더링
                ui.showProfile(data.profile);

                //repos HTML 렌더링
            }
        })
    }else{
        //clear the profile
    }
})