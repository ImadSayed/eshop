/**
 * this image slider requires that you place a <div> with class imageSlider (<div class="imageSlider"></div>) around the list of images
 * and within the container div that you pass to the class constructor
 *
 * @param {Element} container
 * @param {String} propertyId
 */
class ImageSlider {
    constructor(container) {
        this.container = $(container);
        // this.propId = propertyId;
        this.images = $.makeArray(this.container.find('div.images-wrapper').find('img'));
        this.numberOfImages = this.images.length;
        this.slider = this.container.find('div.images-wrapper');
        this.containerWidth = this.container.width();
        this.sliderWidth = 0;
        this.sliderLeft = 0;
        this.dotWidth = 0;
        this.dotSliderLeft = -4;
        this.imageNumber = 1;
        this.animationTime = 50;
        if (typeof isMobile !== 'undefined' && isMobile) {
            this.animationTime = 200;
        }
        this.dotAnimationTime = 400;
        this.direction = 'right';
    }

    sizeSlider() {
        this.sliderWidth = this.numberOfImages * this.containerWidth;
        this.slider.width(this.sliderWidth + 'px');
        this.slider.find('img').width(this.containerWidth + 'px');
        let height = this.slider.find('img').height();
        this.container.css('height', height);
    }

    placeDotsandPositions() {
        this.dotWindow = $('<div class="dot-window" data-image="1"></div>');
        this.dotSlider = $('<div class="dot-slider"></div>');
        this.dotSlider.append($('<div class="dot-box"><span class="dot active" data-dot="1"></span></div>'));
        let position = 1;
        $(this.images[0]).attr('data-position', position);
        for (let i = 1; i < this.numberOfImages; i++) {
            position = i + 1;
            $(this.images[i]).attr('data-position', position);
            if (i < 3) {
                this.dotSlider.append($('<div class="dot-box"><span class="dot nearActive" data-dot="' + position + '"></span></div>'));
            } else if (i == 3) {
                this.dotSlider.append($('<div class="dot-box"><span class="dot" data-dot="' + position + '"></span></div>'));
            } else {
                this.dotSlider.append($('<div class="dot-box"><span class="dot small" data-dot="' + position + '"></span></div>'));
            }
        }
        this.dotWindow.append(this.dotSlider);
        this.container.append(this.dotWindow);
    }

    placeHandles() {
        this.leftHandle = $('<button id="leftHandle" class="disabled"></button>');
        this.rightHandle = $('<button id="rightHandle"></button>');
        this.container.append(this.leftHandle);
        this.container.append(this.rightHandle);
    }

    moveDotSlider(direction) {
        this.imageNumber = $(this.dotWindow).attr('data-image');
        this.dotWidth = this.dotSlider.width() / this.numberOfImages;
        let dots = $.makeArray($(this.dotSlider).children());
        let numOfDots = dots.length;

        for (let j = 1; j <= numOfDots; j++) {
            $(this.dotWindow)
                .find('.dot[data-dot="' + j + '"]')
                .removeClass('active')
                .removeClass('nearActive')
                .removeClass('small');
        }

        if (direction == 'left' && this.imageNumber < numOfDots) {
            this.imageNumber++;
        } else if (direction == 'right' && this.imageNumber > 1) {
            this.imageNumber--;
        }

        $(this.dotWindow).attr('data-image', this.imageNumber);
        $(this.dotWindow)
            .find('.dot[data-dot="' + this.imageNumber + '"]')
            .addClass('active');
        if (this.imageNumber == 1) {
            $(this.dotWindow).find('.dot[data-dot="2"]').addClass('nearActive');
            $(this.dotWindow).find('.dot[data-dot="3"]').addClass('nearActive');
            $(this.dotWindow).find('.dot[data-dot="5"]').addClass('small');
        } else if (this.imageNumber == 3) {
            $(this.dotWindow).find('.dot[data-dot="1"]').addClass('nearActive');
            $(this.dotWindow).find('.dot[data-dot="2"]').addClass('nearActive');
            $(this.dotWindow).find('.dot[data-dot="5"]').addClass('small');
        } else if (this.imageNumber == numOfDots) {
            $(this.dotWindow)
                .find('.dot[data-dot="' + (this.imageNumber - 1) + '"]')
                .addClass('nearActive');
            $(this.dotWindow)
                .find('.dot[data-dot="' + (this.imageNumber - 2) + '"]')
                .addClass('nearActive');
            $(this.dotWindow)
                .find('.dot[data-dot="' + (this.imageNumber - 4) + '"]')
                .addClass('small');
        } else if (this.imageNumber == numOfDots - 2) {
            $(this.dotWindow)
                .find('.dot[data-dot="' + numOfDots + '"]')
                .addClass('nearActive');
            $(this.dotWindow)
                .find('.dot[data-dot="' + (numOfDots - 1) + '"]')
                .addClass('nearActive');
            $(this.dotWindow)
                .find('.dot[data-dot="' + (numOfDots - 4) + '"]')
                .addClass('small');
        } else {
            $(this.dotWindow)
                .find('.dot[data-dot="' + (this.imageNumber + 1) + '"]')
                .addClass('nearActive');
            $(this.dotWindow)
                .find('.dot[data-dot="' + (this.imageNumber - 1) + '"]')
                .addClass('nearActive');
            if (this.imageNumber < 4) {
                $(this.dotWindow).find('.dot[data-dot="5"]').addClass('small');
            } else if (this.imageNumber > numOfDots - 3) {
                $(this.dotWindow)
                    .find('.dot[data-dot="' + (numOfDots - 4) + '"]')
                    .addClass('small');
            }
        }

        if (direction == 'left') {
            if (this.imageNumber > 3 && this.imageNumber < numOfDots - 1) {
                this.dotSliderLeft = this.dotSliderLeft - this.dotWidth;
                this.dotSlider.finish().animate({ left: this.dotSliderLeft }, this.dotAnimationTime);
            }
        } else if (direction == 'right') {
            if (this.imageNumber > 2 && this.imageNumber < numOfDots - 2) {
                this.dotSliderLeft = this.dotSliderLeft + this.dotWidth;
                this.dotSlider.finish().animate({ left: this.dotSliderLeft }, this.dotAnimationTime);
            }
        }
    }

    isContainerInView() {
        let windowHeight = $(window).height();
        let containerBounds = this.container[0].getBoundingClientRect();
        let containerTop = containerBounds.top;

        // if (containerTop <= windowHeight) {
        //     return true;
        // }
        // return false;
        return containerTop <= windowHeight;
    }

    loadNextImage(imageNumberToLoad) {
        let imageToLoad = this.slider.find('img[data-position="' + imageNumberToLoad + '"]');
        if (this.isContainerInView() && imageToLoad.attr('src').length == 0) {
            let imageUrl = imageToLoad.data('src');
            imageToLoad.attr('src', imageUrl);
            imageToLoad.attr('data-src', '');
        }
    }

    animateSlider(direction) {
        let nextPos = 0;
        this.slider.animate({ left: this.sliderLeft }, this.animationTime);

        if (direction == 'left') {
            this.moveDotSlider('left');
            this.leftHandle.removeClass('disabled');
            nextPos = this.sliderLeft - this.containerWidth;
            if (nextPos * -1 >= this.sliderWidth) {
                this.rightHandle.addClass('disabled');
            } else {
                let nextImageNumberToLoad = this.imageNumber + 1;
                this.loadNextImage(nextImageNumberToLoad);
            }
        } else if (direction == 'right') {
            this.moveDotSlider('right');
            this.rightHandle.removeClass('disabled');
            nextPos = this.sliderLeft + this.containerWidth;
            if (nextPos > 0) {
                this.leftHandle.addClass('disabled');
            }
        }
    }

    calculateSliderPosition(direction) {
        if (direction == 'left' && Math.floor(this.sliderLeft - this.containerWidth) * -1 < Math.floor(this.slider.width())) {
            this.sliderLeft = this.sliderLeft - this.containerWidth;
        } else if (direction == 'right' && Math.floor(this.sliderLeft + this.containerWidth) <= 0) {
            this.sliderLeft = this.sliderLeft + this.containerWidth;
        }
        this.animateSlider(direction);
    }

    swipeDetect(el, threshold = 50, restraint = 100, allowedTime = 2000) {
        let swipedir, startX, startY, distX, distY, elapsedTime, startTime;
        el.on('touchstart', (e) => {
            let touchObj = e.originalEvent.changedTouches[0];
            startX = touchObj.pageX;
            startY = touchObj.pageY;
            startTime = new Date().getTime();
        });
        el.on('touchend', (e) => {
            let touchObj = e.originalEvent.changedTouches[0];
            distX = touchObj.pageX - startX;
            distY = touchObj.pageY - startY;
            elapsedTime = new Date().getTime() - startTime;
            if (elapsedTime <= allowedTime) {
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
                    swipedir = distX < 0 ? 'left' : 'right';
                }
            }
            this.calculateSliderPosition(swipedir);
        });
    }

    addClickHandler() {
        this.placeHandles();
        this.leftHandle.on('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.calculateSliderPosition('right');
        });
        this.rightHandle.on('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.calculateSliderPosition('left');
        });
    }

    resizeImageSlider() {
        this.containerWidth = this.container.width();
        this.sliderWidth = 0;
        this.sliderLeft = 0;
        this.dotWidth = 0;
        this.sizeSlider();
        this.sliderLeft = (this.imageNumber - 1) * this.containerWidth * -1;
        this.slider.css('left', this.sliderLeft);
    }

    createImageSlider() {
        this.placeDotsandPositions();
        this.sizeSlider();
        this.swipeDetect(this.container);
        this.addClickHandler();
        let nextImageNumberToLoad = 2;
        this.loadNextImage(nextImageNumberToLoad);
        $(window).scroll(() => {
            this.loadNextImage(nextImageNumberToLoad);
        });
    }
}

$(() => {
    let container = $('.image-carousel');
    let imagesSlider = new ImageSlider(container);
    imagesSlider.createImageSlider();
    $(window).on('resize', () => {
        imagesSlider.resizeImageSlider();
    });
});
