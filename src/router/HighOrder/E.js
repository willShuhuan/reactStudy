import React from 'react';

//继承方式的高阶组件,很少使用（不建议）
const modifyPropsHOC = (wrappedComponent) => class newComponent extends wrappedComponent{
    static displayName = 'newComponent(${getDisplayName(wrappedComponent)})'
    render(){
        const element = super.render();
        const newStyle = {
            color:element.type==='div'?'red':'green',
        }
        const newProps = {...this.props,style:newStyle}
        return React.cloneElement(element,newProps,element.props.children);
    }
}

function getDisplayName(wrappedComponent) {
    return wrappedComponent.displayName ||wrappedComponent.name||'component'

}

export default modifyPropsHOC;