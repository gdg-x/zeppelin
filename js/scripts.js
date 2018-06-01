(function($) {
    $(document).ready(function() {
        $(window).load(function() {
            $('#st-container').removeClass('disable-scrolling');
            $('#loading-animation').fadeOut();
            $('#preloader').delay(350).fadeOut(800);
            initGooglePlus();
            equalheight('.same-height');
        });

        if ($(window).width() > 1500) {
            $('.effect-wrapper').addClass('col-lg-3');
        }
        if ($(window).width() < 768) {
            $('.animated').removeClass('animated').removeClass('hiding');
            $('.stat span').removeClass('timer');
            $('.timeslot-label').addClass('stick-label');
        }
        if ($(window).height() < 512) {
            $('#bottom-navlinks').removeClass('bottom-navlinks').addClass('bottom-navlinks-small');
        }

        $(window).scroll(function() {
            var scroll = $(this).scrollTop();
            var header = $('#top-header');
            var logo = $('#logo-header .logo');
            var buyButton = $('.right-nav-button');
            var topOffset = header.height() + $('.track-header').height();


            if (scroll >= $('.top-section').height() && $(window).width() > 767) {
                buyButton.removeClass('right-nav-button-hidden');
            } else if (scroll < $('.top-section').height() && $(window).width() > 767){
                buyButton.addClass('right-nav-button-hidden');
            }

            $('.slot').each(function() {
                var currentPosition = $(this).offset().top - scroll;
                var offsetActivator = topOffset + $(this).find('.slot-title').height();
                if (currentPosition <= offsetActivator && currentPosition >= 0) {
                    $('.track-header.sticky').find('.slot-detail').html($(this).data('slotDetail'));
                }
            });
        });

        $(window).resize(function() {
            if ($(window).width() > 1500) {
                $('.effect-wrapper').addClass('col-lg-3');
            } else {
                $('.effect-wrapper').removeClass('col-lg-3');
            }
            if ($(window).width() < 768) {
                $('.same-height').css('height', '100%');
                $('.timeslot-label').addClass('stick-label');
            } else {
                $('.timeslot-label').removeClass('stick-label');
                if (container.hasClass('st-menu-open')) {
                    container.removeClass('st-menu-open');
                    $('body').css('overflow', 'auto');
                }
                equalheight('.same-height');
            }
            if ($(window).height() < 512) {
                $('.st-menu').addClass('scrollable');
                $('#bottom-navlinks').removeClass('bottom-navlinks').addClass('bottom-navlinks-small');
            } else {
                $('.st-menu').removeClass('scrollable');
                $('#bottom-navlinks').removeClass('bottom-navlinks-small').addClass('bottom-navlinks');
            }
        });

        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
        $(function() {
            $('a[href=#]').click(function() {
                event.preventDefault();
            });
        });
        $(function() {
            if(window.location.href.indexOf("schedule") > -1 && window.location.hash) {
                var hash = window.location.hash;
                $(hash).click();
            } 
        });

        $(function() {
            var appear, delay, i, offset, _i, _len, _ref;
            _ref = $(".appear-animation");
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                i = _ref[_i];
                offset = i.offsetLeft + i.offsetTop;
                delay = offset / 1000;
                $(i).css('transition-delay', '' + (delay * 0.47) + 's');
                $(i).css('transition-duration', '' + 0.2 + 's');
            }
        });
        $('.appear-animation-trigger').appear(function() {
            setTimeout(function() {
                $('.appear-animation-trigger').parent('div').find('.appear-animation').addClass('visible');
            }, 1000);
        });

        $('.animated').appear(function() {
            var element = $(this);
            var animation = element.data('animation');
            var animationDelay = element.data('delay');
            if (animationDelay) {
                setTimeout(function() {
                    element.addClass(animation + " visible");
                    element.removeClass('hiding');
                    if (element.hasClass('counter')) {
                        element.find('.timer').countTo();
                    }
                }, animationDelay);
            } else {
                element.addClass(animation + " visible");
                element.removeClass('hiding');
                if (element.hasClass('counter')) {
                    element.find('.timer').countTo();
                }
            }
        }, {
            accY: -150
        });

        equalheight = function(container) {
            var currentTallest = 0,
                currentRowStart = 0,
                rowDivs = new Array(),
                $el,
                topPosition = 0;
            $(container).each(function() {
                $el = $(this);
                $($el).height('auto')
                topPostion = $el.position().top;
                if (currentRowStart != topPostion) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].height(currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPostion;
                    currentTallest = $el.height();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
            });
        }


        //Side menu
        var container = $('.st-container');
        $('#menu-trigger').click(function(event) {
            event.stopPropagation();
            container.toggleClass('st-menu-open');
        });
        $('.st-pusher').click(function() {
            if (container.hasClass('st-menu-open')) {
                container.removeClass('st-menu-open');
            }
        });

        $('.track-header').each(function() {
            var slot = $(this).closest('.schedule-table').find('.slot').first();
            var scheduleFirstSlotText;
            while (scheduleFirstSlotText === undefined) {
                scheduleFirstSlotText = slot.data('slotDetail');
                slot = slot.next();
            }
            $(this).find('.slot-detail').html(scheduleFirstSlotText);
        });

        $('#post-section .post-body p').each(function() {
            if ($(this).find('.feature-image').length) {
                var url = $(this).find('.feature-image').prop('src');
                $('#top-section').css('background-image', 'url(' + url + ')').addClass('enable-overlay');
            }
        });

        $('.slider').each(function() {
            $(this).find('.slider-item').first().addClass('slider-current-item').removeClass('hidden');
            if ($(this).find('.slider-item').length > 1) {
                $(this).closest('.speaker-item').find('.slider-next-item').removeClass('hidden');
            }
        });
        $('.slider-next-item').click(function() {
            var slider = $(this).closest('div');
            var elem = slider.find('.slider-current-item').next();
            if (elem.length) {
                elem.addClass('slider-current-item').removeClass('hidden');
                slider.find('.slider-current-item').first().removeClass('slider-current-item').addClass('hidden');
            } else {
                slider.find('.slider-item').first().addClass('slider-current-item').removeClass('hidden');
                slider.find('.slider-current-item').last().removeClass('slider-current-item').addClass('hidden');
            }
        });
        $('.modal').on('hidden.bs.modal', function () {
            var iframe = $(this).find('iframe');
            iframe.attr('src', iframe.attr('src'));
        });
        $('.slot').click(function() {
            location.hash = $(this).attr('id');
        });


        if (typeof twitterFeedUrl !== 'undefined') {
            $.getJSON(twitterFeedUrl, function(data) {
                $.each(data, function(i, gist) {
                    var tweetElement = '<div class="tweet animated fadeInUp hidden"><p class="tweet-text">' + linkify(gist.text) + '</p><p class="tweet-meta">by <a href="https://twitter.com/' + gist.user.screen_name + '" target="_blank">@' + gist.user.screen_name + '</a></p></div>';
                    $('#tweets').append(tweetElement);
                });
                animateTweets();
            });

            function linkify(inputText) {
                var replacedText, links1, links2, hashtags, profileLinks;
                links1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
                replacedText = inputText.replace(links1, '<a href="$1" target="_blank">$1</a>');
                links2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
                replacedText = replacedText.replace(links2, '$1<a href="http://$2" target="_blank">$2</a>');
                hashtags = /#(\S*)/g;
                replacedText = replacedText.replace(hashtags, '<a href="https://twitter.com/search?q=%23$1" target="_blank">#$1</a>');
                profileLinks = /\B@([\w-]+)/gm;
                replacedText = replacedText.replace(profileLinks, '<a href="https://twitter.com/$1" target="_blank">@$1</a>');
                return replacedText;
            }

            function animateTweets() {
                var $tweets = $('#tweets').find('.tweet'),
                    i = 0;
                $($tweets.get(0)).removeClass('hidden');
                function changeTweets() {
                    var next = (++i % $tweets.length);
                    $($tweets.get(next - 1)).addClass('hidden');
                    $($tweets.get(next)).removeClass('hidden');
                }
                var interval = setInterval(changeTweets, 5000);
            }
        }
    });

    //Google plus
    function initGooglePlus() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/platform.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    }

})(jQuery);
