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

        // Determine which image to show based on scroll position
        const imageIndex = Math.min(Math.floor(scrollPosition / 50), imgName.length - 1);
        if (imageIndex < imgName.length -1) {
            // During animation: Show the canvas and hide DeviceInterface
            img.src = imgName[imageIndex];
            if (deviceInterface) deviceInterface.style.display = 'none';  // Check for null
            if (canvas) canvas.style.display = 'block';  // Check for null
        } else {
            // After animation: Hide the canvas and show DeviceInterface
            if (canvas) canvas.style.display = 'none';  // Check for null
            if (deviceInterface) deviceInterface.style.display = 'flex'; 
        }
      }
      img.onload = function() {
        function resizeCanvas() {
            // Get the container dimensions
            const containerWidth = canvas.parentElement.offsetWidth;
            const containerHeight = canvas.parentElement.offsetHeight;
            
            // Calculate aspect ratio
            const imgAspectRatio = img.width / img.height;
            const containerAspectRatio = containerWidth / containerHeight;
            
            let newWidth, newHeight;
            
            if (containerAspectRatio > imgAspectRatio) {
                // Container is wider relative to its height
                newWidth = containerHeight * imgAspectRatio;
                newHeight = containerHeight;
            } else {
                // Container is taller relative to its width
                newWidth = containerWidth;
                newHeight = containerWidth / imgAspectRatio;
            }
            
            // Update canvas dimensions
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