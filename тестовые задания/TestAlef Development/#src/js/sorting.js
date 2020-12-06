
(function() {
    'use strict';

    $(".select-price__current").bind("DOMSubtreeModified", function(){
        if ($(".select-price__current").text() == "По возрастанию") {
            mySort('data-price');
        }
        if ($(".select-price__current").text() == "По убыванию") {
            sortListDesc('data-price');
        }
      });
    
      $(".select-age__current").bind("DOMSubtreeModified", function(){
        if ($(".select-age__current").text() == "По возрастанию") {
            mySort('data-age');
        }
        if ($(".select-age__current").text() == "По убыванию") {
            sortListDesc('data-age');
        }
      });

    function mySort(sortType) {
        let items = document.querySelector('.row-card');
        for (let i = 0; i < items.children.length - 1; i++) {
            for (let j = i; j < items.children.length; j++) {
                if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                    console.log(1);
                    let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                    insertAfter(replacedNode, items.children[i]);
                }
            }
        }
    }
    
    function sortListDesc(sortType) {
        let items = document.querySelector('.row-card');
        for (let i = 0; i < items.children.length - 1; i++) {
            for (let j = i; j < items.children.length; j++) {
                if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                    console.log(1);
                    let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                    insertAfter(replacedNode, items.children[i]);
                }
            }
        }
    }
    
    function insertAfter(elem, refElem) {
        return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }
})();

