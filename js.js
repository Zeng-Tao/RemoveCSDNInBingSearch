// ==UserScript==
// @icon            https://cn.bing.com/sa/simg/bing_p_rr_teal_min.ico
// @name            Bing 搜索结果去除 CSDN
// @namespace       [url=https://github.com/zeng-Tao/]https://github.com/zeng-Tao/[/url]
// @author          enough
// @description     Bing 搜索结果去除 CSDN
// @match           *://*.bing.com/search?q=*
// @version         0.1
// ==/UserScript==
(function () {
    'use strict'

    const log = console.log.bind(console)

    const e = function(sel, parent=document) {
        let element = parent.querySelector(sel)
        return element
    }

    const es = function(sel, parent=document) {
        let elements = parent.querySelectorAll(sel)
        return elements
    }

    let createButton = function(hasCSDNItem) {
        let b = document.createElement('button')
        b.id = 'toggle-csdn-button'
        b.show= false
        b.move = false
        b.hasCSDNItem = hasCSDNItem
        if (hasCSDNItem) {
            b.innerText = '显示CSDN结果'
        } else {
            b.innerText = '没有CSDN结果'
        }
        // button style
        b.style.cssText = "width: 60px; height: 60px; z-index: 9999; background: #1fe0b7; color: #fff; position: fixed; top: 20%; left: 30px"
        e('body').insertAdjacentElement('beforeEnd', b)
        
        b.addEventListener('click', function(event) {
            // log('click', b.show)
            if (!b.hasCSDNItem) {
                return
            }
            toggleCSDNItem(event)
            if (b.show) {
                b.innerText = '隐藏CSDN结果'
            } else {
                b.innerText = '显示CSDN结果'
            }
        })

        b.addEventListener('mousedown', function(event) {
            // log('mousedown')
            b.move = true
        })

        b.addEventListener('mousemove', function(event) {
            // log('mousemove')
            let x = event.clientX - 20
            let y = event.clientY - 20
            let b = event.target
            if (b.move) {
                // log('mouse move x, y', x, y)
                b.style.left = `${x}px`
                b.style.top = `${y}px`
            }
        })

        window.addEventListener('mouseup', function(event) {
            // log('mouseup')
            b.move = false
        })
    }

    let toggleCSDNItem = function(event) {
        let target = event.target
        let items = es('.csdn')
        for (let item of items) {
            if (item.hidden) {
                item.hidden = false
                target.show = true
            } else {
                item.hidden = true
                target.show = false
            }
        }
    }

    let main = function() {
        // log('start')
        let items = es('#b_results .b_algo')
        let hasCSDNItem = false
        for (let item of items) {
            let cite = e('cite', item)
            let src = cite.innerText
            if (src.includes('csdn')) {
                // cite.style.background = 'red'
                item.style.border = 'solid 3px red'
                item.classList.add('csdn')
                item.hidden = true
                hasCSDNItem = true
            }
        }
        createButton(hasCSDNItem)
    }

    main()
})()
