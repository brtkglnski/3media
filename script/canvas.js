const canvas = document.getElementById("3mediaDevice");
const ctx = canvas.getContext("2d");
const deviceInterface = document.querySelector('.DeviceInterface');

      const img = new Image();
      const imgName = [];
      const imgLocation = '../../images/anim/';
      
      function imageTable()
      {
        for (i = 0; i<19; i++)
        {
            imgName.push(`${imgLocation}frame${i + 1}.png`);
        }
      }
      imageTable();
      img.src = imgName[0];
      function scrollChange()
      {
        const scrollPosition = window.scrollY;

        const imageIndex = Math.min(Math.floor(scrollPosition / 45), imgName.length - 1);
        if (imageIndex < imgName.length -1) {
            // During animation
            img.src = imgName[imageIndex];
            if (deviceInterface) deviceInterface.style.display = 'none'; 
            if (canvas) canvas.style.display = 'block'; 
        } else {
            // After animation
            if (canvas) canvas.style.display = 'none'; 
            if (deviceInterface) deviceInterface.style.display = 'flex'; 
        }
      }
      img.onload = function() {
        function resizeCanvas() {
            const containerWidth = canvas.parentElement.offsetWidth;
            const containerHeight = canvas.parentElement.offsetHeight;

            const imgAspectRatio = img.width / img.height;
            const containerAspectRatio = containerWidth / containerHeight;
            
            let newWidth, newHeight;
            
            if (containerAspectRatio > imgAspectRatio) {
                newWidth = containerHeight * imgAspectRatio;
                newHeight = containerHeight;
            } else {
                newWidth = containerWidth;
                newHeight = containerWidth / imgAspectRatio;
            }
            
            canvas.width = newWidth;
            canvas.height = newHeight;
            
            // Clear canvas and draw the image
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
        
        // Initial resize
        resizeCanvas();
        
        // Resize on window resize
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('scroll', scrollChange);
      };