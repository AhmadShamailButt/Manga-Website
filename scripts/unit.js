import React from 'react';
import '../style/unit.css';
import thumbnailImage from '../img/image-19.png';


function ChapterList({ numUnits }) {
    const units = Array.from({ length: numUnits }, (_, index) => (
        <div key={index} className="unit-conatiner ChapterListItem-module_chapterListItem_ykICp">
            <div className="ChapterListItem-module_chapterWrapper_3CxyE">
                <img alt="thumbnail" className="ChapterListItem-module_thumbnail_alreadyRead_1u3_a" 
                     src={thumbnailImage}  // Using the imported image
                     lazy="loaded" />
                <div className="ChapterListItem-module_chapterNameContainer_3MJKj">
                    <p className="ChapterListItem-module_name_alreadyRead_1HYKk">#00{index + 1}</p>
                    <p className="ChapterListItem-module_commentCount_4FxT-">
                        <img src="https://mangaplus.shueisha.co.jp/img/icon_comment.c437702e.svg" 
                             className="ChapterListItem-module_commentIconMini_1hQ5R" />293 {/* Change this number as needed */}
                    </p>
                </div>
                <p className="ChapterListItem-module_title_alreadyRead_3tKxq">Chapter {index + 1}</p>
                <p className="ChapterListItem-module_date_alreadyRead_31MGZ">24 Feb 2023</p>
            </div>
            <a href="/comments/1015918" className="ChapterListItem-module_commentContainer_1P6qt">
                <img src="https://mangaplus.shueisha.co.jp/img/btn_comment@4x.188ef5f1.svg" 
                     alt="commentIcon" 
                     className="ChapterListItem-module_commentIcon_3lw4k" />
            </a>
            <div className="ChapterListItem-module_limitContainer_2JLZi"></div>
        </div>
    ));

    return (
        <main className="TitleDetail-module_main_19fsJ snipcss-kiHlk right-half">
            <div>
                <div className="ChapterList-module_chapterListTitleWrapper_1MLyK">
                    <h6 className="ChapterList-module_chapterListTitle_3-F05">Chapter List</h6>
                </div>
                <div className="ChapterList-module_chapterHeader_1_HCB">
                    <h3 className="ChapterList-module_message_bxe9x"></h3>
                    <div className="ChapterList-module_sort_3OHNF">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAjVBMVEUAAAD////..." 
                             alt="sort" 
                             className="ChapterList-module_sortIcon_1dGE4" />
                    </div>
                </div>
                {units}
            </div>
        </main>
    );
}

export default ChapterList;