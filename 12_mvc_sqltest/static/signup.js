function Register() {
    const form = document.forms['Register-form'];
    axios({
        method: 'POST',
        url: '/user/signup',
        data: {
            id: form.id.value,
            password: form.password.value,
            name: form.name.value
        }
    }).then((res) => {
        console.log(res.data);
        
        form.reset();
    })
}