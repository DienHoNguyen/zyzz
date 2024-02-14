const greenButton = document.getElementById('yesButton');
            const redButton = document.getElementById('noButton');
            
            const gif = document.getElementById("gif").getAttribute("src")
            let clickCount = 0;

            const texts1 = [
                "Chắc chưa!!!!",
                "Hoi màaaaaa",
                "Đừng có xạo",
                "Nói có i a thưng",
                "Nè con bé kia",
                "Hic ơ kìa",
                "Cho chọn lại ó",
                "Tui bùn ó"
            ];
            redButton.addEventListener('click', () => {
                if (clickCount < texts1.length) {
                    redButton.textContent = texts1[clickCount];
                    document.getElementById("gif").src="2.gif";
                }
                clickCount++;
                if (clickCount === 2) {
                    document.getElementById("gif").src="5.gif";
                }
                if (clickCount === 3) {
                    document.getElementById("gif").src="6.gif";
                }
                if (clickCount === 4) {
                    document.getElementById("gif").src="8.gif";
                }
                if (clickCount === 5) {
                    document.getElementById("gif").src="7.gif";
                }
                if (clickCount === 6) {
                    document.getElementById("gif").src="9.gif";
                }
                if (clickCount === 7) {
                    document.getElementById("gif").src="10.gif";
                }
                if (clickCount === 8) {
                    document.getElementById("gif").src="11.gif";
                }
                if (clickCount === 9) {
                    greenButton.remove();
                    redButton.textContent="Ummm...";
                    document.getElementById("gif").src="3.gif";
                }else{
                    const currentSize = window.getComputedStyle(greenButton).getPropertyValue('font-size');
                    const newSize = parseFloat(currentSize)*1.1;
                    greenButton.style.fontSize = newSize + 'px';
                }
            });

            greenButton.addEventListener('click',() =>{
                greenButton.innerHTML = "Dạ a cũng iu bé a hí";
                redButton.remove();
                document.getElementById("gif").src="1.gif";
            })