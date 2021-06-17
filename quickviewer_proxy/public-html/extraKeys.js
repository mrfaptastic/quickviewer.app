class ExtraKeys 
{
    constructor()
    {
        this.id = "~456";
        this.dataManager = null;
        this.displayField = null;
    }
    
    setDataManager(dManager)
    {
        if(dManager)
            this.dataManager = dManager;
    }
    
    setDisplayField(dField)
    {
        if(dField)
            this.displayField = dField;
    }
    
    extraKeyStateChanged(key,state,event)
    {
        var num = key.num;
        
        if(state)
            key.style.backgroundColor = "#aaa";
        else key.style.backgroundColor = "#222";
        
        if(num === "1111")
        {if(state)this.dataManager.sendToSocket(KEY_CHANGE_DISPLAY);}
        else if(num === "1112")
        {if(state)this.openFullscreen();}
        else if(num === "1113")
        {if(state)this.displayField.showKeyboard();}
		else if(num === "1116")
		{if(state)this.dataManager.requestRefresh(); }
        else {this.dataManager.sendInput(KEY_SET_KEY_STATE,num,state);}
    }
    
    openFullscreen()
    {
        if (document.body.requestFullscreen) {
        document.body.requestFullscreen();
        } else if (document.body.mozRequestFullScreen) { /* Firefox */
            document.body.mozRequestFullScreen();
        } else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            document.body.webkitRequestFullscreen();
        } else if (document.body.msRequestFullscreen) { /* IE/Edge */
            document.body.msRequestFullscreen();
        } else if (document.body.webkitEnterFullScreen) {
            document.body.webkitEnterFullScreen();
        }
    }
    
    createExtraKeysHtml()
    {
        this.topMenu = document.createElement('div');
        this.topMenu.id = 'topMenu';
        this.topMenu.style.cssText = 'position:absolute;\
            background-color: rgba(47,47,47,100);\
            border: 1px solid #444;\
            border-radius: 3px;\
            top: 0px;\
            left: calc((100% / 2) - 145px);\
            width: 290px;\
            height: 26px;\
            z-index: 3;\
            visibility: visible;';
        
        var cssExtraKey = 'position: absolute;\
            border: 1px solid #aaa;\
            width: 24px;\
            height: 24px;\
            background-color: #222;\
            border-radius: 3px;\
            color: #eee;\
            text-align: center;\
            line-height: 24px;\
            font-size: 14px;';
        
        this.btnEsc = document.createElement('div');
        this.btnEsc.id = 'btnEsc';
		this.btnEsc.title = "Send the Esc key to the remote host.";
        this.btnEsc.classList.add('extraKey');
        this.btnEsc.num = '27';
        this.btnEsc.style.cssText = cssExtraKey + 'width: 32px;';
        this.btnEsc.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24">\
                <text x="-5" y="20" font-size="20" font-family="Calibri" fill="white">Esc</text></svg>';
        this.topMenu.append(this.btnEsc);
        
        this.btnShift = document.createElement('div');
        this.btnShift.id = 'btnShift';
		this.btnShift.title = "Send the Shift key to the remote host.";		
        this.btnShift.classList.add('extraKey');
        this.btnShift.num = '16';
        this.btnShift.style.cssText = cssExtraKey + 'width: 40px; left: 35px;';
        this.btnShift.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24">\
                <text x="-12" y="20" font-size="20" font-family="Calibri" fill="white">Shift</text></svg>';
        this.topMenu.append(this.btnShift);
        
        this.btnCtrl = document.createElement('div');
        this.btnCtrl.id = 'btnCtrl';
		this.btnCtrl.title = "Send the Ctrl key to the remote host.";		
        this.btnCtrl.classList.add('extraKey');
        this.btnCtrl.num = '17';
        this.btnCtrl.style.cssText = cssExtraKey + 'width: 34px; left: 78px;';
        this.btnCtrl.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24">\
                <text x="-7" y="20" font-size="20" font-family="Calibri" fill="white">Ctrl</text></svg>';
        this.topMenu.append(this.btnCtrl);
        
        this.btnWin = document.createElement('div');
        this.btnWin.id = 'btnWin';
		this.btnWin.title = "Send the Windows key to the remote host.";
        this.btnWin.classList.add('extraKey');
        this.btnWin.num = '91';
        this.btnWin.style.cssText = cssExtraKey + 'width: 30px; left: 115px;';
        this.btnWin.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24">\
                <path d="M1,5 L11,3 L11,11 L1,11Z M1,13z L11,13 L11,21 L1,19Z M13,13\
                L23,13 L23,22 L13,21Z M13,11 L13,3 L23,2 L23,11Z" fill="white"/></svg>';
        this.topMenu.append(this.btnWin);
        
        this.btnAlt = document.createElement('div');
        this.btnAlt.id = 'btnAlt';
		this.btnAlt.title = "Send the Alt key to the remote host.";		
        this.btnAlt.classList.add('extraKey');
        this.btnAlt.num = '18';
        this.btnAlt.style.cssText = cssExtraKey + 'width: 30px; left: 148px;';
        this.btnAlt.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24">\
                    <text x="-3" y="20" font-size="20" font-family="Calibri" fill="white">Alt</text></svg>';
        this.topMenu.append(this.btnAlt);
        
        this.btnShowKeyboard = document.createElement('div');
        this.btnShowKeyboard.id = 'btnShowKeyboard';		
        this.btnShowKeyboard.classList.add('extraKey');
        this.btnShowKeyboard.num = '1113';
        this.btnShowKeyboard.style.cssText = cssExtraKey + 'width: 28px; right: 62px;';
        this.btnShowKeyboard.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24">\
            <path d="M12,5 L12,7 L23,7 L23,22 L1,22 L1,7 L12,7 \
            M3,10 L5,10 M7,10 L9,10 M11,10 L13,10 M15,10 L17,10 M19,10 L21,10 \
            M3,14 L5,14 M7,14 L9,14 M11,14 L13,14 M15,14 L17,14 M19,14 L21,14 \
            M3,18 L5,18 M7,18 L17,18 M19,18 L21,18 \
            " stroke="white" stroke-width="2" fill="none"/></svg>';
        this.topMenu.append(this.btnShowKeyboard);
        
        this.btnChangeMonitor = document.createElement('div');
        this.btnChangeMonitor.id = 'btnChangeMonitor';
		this.btnChangeMonitor.title = "Change and select the remote display.";				
        this.btnChangeMonitor.classList.add('extraKey');
        this.btnChangeMonitor.num = '1111';
        this.btnChangeMonitor.style.cssText = cssExtraKey + 'width: 28px; right: 31px;';
        this.btnChangeMonitor.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"> \
                <path d="M19,5 L23,5 L23,19 L14,19 L14,22 L21,23 L7,23 L14,22 L14,19 L5,19 L5,5 \
                L19,5 L19,1 L1,1 L1,15 L5,15" stroke="white" stroke-width="2" fill="none"/></svg>';
        this.topMenu.append(this.btnChangeMonitor);
        
		// Fullscreen
        this.btnFullscrean = document.createElement('div');
        this.btnFullscrean.id = 'btnFullscrean';
		this.btnFullscrean.title = "Change the display to full screen on this device.";						
        this.btnFullscrean.classList.add('extraKey');
        this.btnFullscrean.num = '1112';
        this.btnFullscrean.style.cssText = cssExtraKey + 'width: 28px; right: 0px;';
        this.btnFullscrean.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"> \
                <path d="M24 9h-4v-5h-5v-4h9v9zm-9 15v-4h5v-5h4v9h-9zm-15-9h4v5h5v4h-9v-9z \
                m9-15v4h-5v5h-4v-9h9z" fill="white"/></svg>';
        this.topMenu.append(this.btnFullscrean);

        
		// New: Referesh
        this.btnRefresh = document.createElement('div');
        this.btnRefresh.id = 'btnRefresh';
		this.btnRefresh.title = "Refresh the image from the remote device.";						
        this.btnRefresh.classList.add('extraKey');
        this.btnRefresh.num = '1116';
        this.btnRefresh.style.cssText = cssExtraKey + 'width: 28px; right: 0px;';
        this.btnRefresh.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z" style="fill:#ffffff" /></svg>';
        this.topMenu.append(this.btnRefresh);
		
        document.body.append(this.topMenu);		
        
        var extraKeys = document.getElementsByClassName('extraKey');
        var isMobilePhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
        
        if(isMobilePhone)
        {
            for(var j=0;j<extraKeys.length;++j) {
                extraKeys[j].addEventListener('touchstart', this.extraKeyStateChanged.bind(this,extraKeys[j],true));
                extraKeys[j].addEventListener('touchend', this.extraKeyStateChanged.bind(this,extraKeys[j],false));
            }
        }
        else
        {
            for(var i=0;i<extraKeys.length;++i) {
                extraKeys[i].addEventListener('mousedown', this.extraKeyStateChanged.bind(this,extraKeys[i],true));
                extraKeys[i].addEventListener('mouseup', this.extraKeyStateChanged.bind(this,extraKeys[i],false));
            }
        }
    }
}
