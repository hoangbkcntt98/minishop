import React from 'react'

const NavLinkItem = (props) => {
    const { open, showDropdown, title,update} = props
    return (
        <React.Fragment>
            <div class="nav-link__item">
                <div class="nav-link__item__root">
                    <div class="nav-link__item__root__link">
                        <i class="bx bxs-right-arrow small-icons" type="solid"></i>
                        <a onClick={()=>update('index',title)} title={title.root}><i class="fa fa-caret-right" aria-hidden="true"></i>{title.root}</a>
                    </div>

                    <div class="nav-link__item__root__dropdown__btn">
                        <i class="bx bx-chevron-down" onClick={() =>showDropdown(title.root)}></i>
                    </div>
                </div>

                <ul class={open ? 'nav-link__dropdown__show' : 'nav-link__dropdown'} >
                    {title.child.map((element, key) => {
                        return (
                            <li class="nav-link__dropdown__item " key={key}>
                                <a class="nav-link__dropdown__aothun" onClick={() =>update('category',element)} title={element.display}>{element.display}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>

    )
}

export default NavLinkItem
