onload = () => {
        document.body.classList.remove("container");
    };
    
    const myAudio = document.getElementById('myAudio');
    myAudio.play();

    function openWhatsAppChat(message) {
        const phoneNumber = '6287871537199'; // Ganti dengan nomor telepon yang diinginkan
    
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }
    setTimeout(() => {
        Swal.fire({
            title: 'Bagus ga? ehehe',
            html: '<input id="whatsappMessage" class="swal2-input" placeholder="Ketik pesan Anda...">', // Input field untuk pesan kustom
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Kirim',
            cancelButtonText: 'Batal',
            preConfirm: () => {
                const message = document.getElementById('whatsappMessage').value;
                openWhatsAppChat(message);
            }
        });
    }, 5000); // Jeda waktu 2 detik sebelum muncul SweetAlert
    
