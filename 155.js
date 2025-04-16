
    new Vue({
      el: '.login-container',
      data() {
        const validateUsername = (rule, value, callback) => {
          if (value == '') {
            callback(new Error('请输入您的用户名'))
          } else {
            callback()
          }
        }
        const validatePassword = (rule, value, callback) => {
          if (value == '') {
            callback(new Error('请输入您的密码'))
          }
          if (value.length < 6) {
            callback(new Error('请输入6位长度密码'))
          }
          else {
            callback()
          }
        }
        return {
          loginForm: {
            username: '',
            password: '',
          },
          loginRules: {
            username: [{ required: true, trigger: 'blur', validator: validateUsername }],
            password: [{ required: true, trigger: 'blur', validator: validatePassword }]
          },
        }
      },
      created() {
        var that = this;
        document.getElementById("loading-text").style.display = "none";//隐藏
        document.getElementById("loader").style.display = "none";
        document.addEventListener('keyup', function (event) {
          if (event.key === 'Enter' || event.keyCode === 13) {
            debugger
            // 回车执行代码
            that.login('loginForm');
          }
        });
        // setTimeout(() => {
        //   that.login('loginForm');
        // }, 20000);
        // setTimeout(() => {
        //   window.location.reload()
        // }, 45000);
      },
      methods: {
        clear: function () {
          Source = document.body.firstChild.data;
          document.open();
          document.close();
          document.body.innerHTML = Source;
        },
        login: function (loginForm) {
          debugger
          this.$refs[loginForm].validate((valid) => {
            if (valid) {
              debugger
              if (this.loginForm.username == 'weeland' && this.loginForm.password == 'weeland1234560') {
                // 要操作的元素
                const container = document.querySelector('.container');
                container.classList.add('success');
                setTimeout(() => {
                  const container = document.querySelector('.loading-text');
                  container.classList.add('success');
                }, 2000);
                setTimeout(() => {
                  document.getElementById("loading-text").style.display = "";//显示
                  const container2 = document.querySelector('#loading-text');
                  container2.classList.add('success');
                }, 3500);
                setTimeout(() => {
                  document.getElementById("loader").style.display = "";//显示
                  // const container3 = document.querySelector('#loader');
                  // container3.classList.add('success');
                }, 9000);
              } else if (this.loginForm.username != 'weeland') {
                window.alert("用户名错误，请重新输入！")
              } else {
                window.alert("密码错误，请重新输入！")
              }

            } else {
              console.log('error submit!!');
              return false;
            }
          });

        }
      },
    })
   