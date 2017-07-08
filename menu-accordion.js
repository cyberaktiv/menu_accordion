"use strict";

var MenuAccordion = function (id) {

    (function () {

        var initBlock = document.getElementById(id);

        var data = getDataFromInitBlock(initBlock),
            countBlocks = data.titles.length,
            blockMenu,
            type,
            blocks = [];

        initBlock.innerHTML = "";

        for (var i = 0; i < countBlocks; i++) {

            type = (i % 2 === 0) ? "dark" : "light";
            blockMenu = new BlockMenu(data.titles[i], data.content[i], type);
            blocks.push(blockMenu);
            initBlock.appendChild(blockMenu.node);
        }
    })();

    function getDataFromInitBlock(initBlock) {

        var childNodes = initBlock.childNodes,
            childLength = childNodes.length,
            titles = [],
            content = [];

        for (var i = 0; i < childLength; i++) {

            if ((childNodes[i].nodeName).toLowerCase() === "p")
                titles.push(childNodes[i].innerHTML);

            if ((childNodes[i].nodeName).toLowerCase() === "span")
                content.push(childNodes[i].innerHTML);
        }

        return {
            'titles': titles,
            'content': content
        }
    }
};

var BlockMenu = function (title, content, type) {

    this.node = init();

    function init() {

        var block, blockTitle, blockContent;

        block = createDivWithClasses("menu-block", type, "close");
        blockTitle = createTitle(title);
        blockContent = createContent(content);

        blockTitle.setAttribute("onselectstart", "return false");
        blockTitle.setAttribute("onmousedown", "return false");

        block.appendChild(blockTitle);
        block.appendChild(blockContent);

        blockTitle.onclick = function () {

            closeAllAdjacentBlocks(block);

            if (block.classList.contains("open")) {
                close(block);
            } else {
                open(block);
            }
        };
        return block;
    }

    function closeAllAdjacentBlocks(block) {

        var blocks, countBlocks, i;

        blocks = block.parentNode.childNodes;
        countBlocks = blocks.length;

        for (i = 0; i < countBlocks; i++) {
            if (blocks[i] !== block && blocks[i].classList.contains("open")) {
                close(blocks[i]);
            }
        }
    }

    function createContent(content) {

        var blockContent, blockContentText;

        blockContent = createDivWithClasses("menu-block-content");
        blockContentText = createDivWithClasses("menu-block-content-text");
        blockContentText.innerHTML = content;

        blockContent.appendChild(blockContentText);

        return blockContent;
    }

    function createTitle(title) {

        var blockTitle, blockTitleText, blockTitlePointer;

        blockTitle = createDivWithClasses("menu-block-title");

        blockTitleText = createDivWithClasses("menu-block-title-text");
        blockTitleText.innerHTML = title;

        blockTitlePointer = createDivWithClasses("menu-block-title-pointer");

        blockTitle.appendChild(blockTitleText);
        blockTitle.appendChild(blockTitlePointer);

        return blockTitle;
    }

    function createDivWithClasses() {

        var block = document.createElement("div");

        for (var i = 0; i < arguments.length; i++) {
            block.classList.add(arguments[i]);
        }
        return block;
    }

    function open(block) {

        var blockContent = block.getElementsByClassName("menu-block-content")[0];
        block.classList.remove("close");
        block.classList.add("open");

        var height = block.getElementsByClassName("menu-block-content-text")[0].offsetHeight;
        blockContent.style.height = height + "px";
    }

    function close(block) {

        var blockContent = block.getElementsByClassName("menu-block-content")[0];
        block.classList.remove("open");
        block.classList.add("close");

        blockContent.style.height = 0;
    }

    return this;
};