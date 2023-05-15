// Toast function
    function toast({
        title= '',
        message= '',
        type = 'error',
        duration = 3000
    })
    {
        const main = document.getElementById('toast');
        if(main){
            const toast = document.createElement('div');
// Auto remove
       const autoRemove =  setTimeout(function() {
                main.removeChild(toast)
            },duration + 1000)

//  remove when click
            toast.onclick = function(e){
                if(e.target.closest('.toast__close')){
                    main.removeChild(toast);
                    clearTimeout(autoRemove);
                }
            }
            const icons = {
                success: 'fa-solid fa-circle-check',
                warning: 'fa-solid fa-circle-exclamation',
                error: 'fa-solid fa-circle-exclamation',
            }
            const icon = icons[type]
            const delay = (duration / 1000 ).toFixed(2);
            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = `slideInlef ease .3s, fadeOut linear 1s ${delay}s forwards`;
                toast.innerHTML = `
                <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}  </p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            `;
            main.appendChild(toast)
           
        }
    }

   function showSuccessTost(){
    toast ({
        title:'Success',
        message: 'Bạn đã đăng kí thành công ',
        type: 'success',
        duration: 2000
    });
   }

   function showWarningTost(){
    toast ({
        title:'Warning',
        message: 'Cảnh báo người dùng phải đủ 18 tuổi mới có thể đăng nhập. ',
        type: 'warning',
        duration: 2000
    });
   }

   function showErrorTost(){
    toast ({
        title:'Error',
        message: 'Có lỗi xãy ra vui lòng liên hệ quản trị viên để khắc phục.',
        type: 'error',
        duration: 2000
    });
   }
