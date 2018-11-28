
$(clickMe).on('click',function(){
  $(popover).show()
  console.log('show')
  setTimeout(function(){
    console.log('添加one click')
    $(document).one('click',function(){
      console.log('hide')
      $(popover).hide()
    })
  },0)
 
})

$(wrapper).on('click',function(e){
  e.stopPropagation()
  console.log('click事件走到了document')
})
