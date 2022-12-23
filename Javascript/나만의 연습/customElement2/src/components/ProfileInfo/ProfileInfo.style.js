export default /* css */ `
<style>
    :host {
        display:block;
        font-family: sans-serif;
    }
    :host(.profile-info__emp-type-ft){
        background-color: #7bb57b;
    }
    :host(.profile-info__emp-type-pt){
        background-color: #ffc107;
    }:host(.profile-info__emp-type-ct){
        background-color: #03a9f4;
    }

    .profile-info__container{
        display:flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .profile-info__picture{
        border-radius:50%;
        width:80vw;
        height:80vw;
        margin:10px auto;
    }
    .profile-info__text{
        padding:10px;
        flex: 1;
    }
    .profile-info__name{
        font-size: 22px;
    }
    .profile-info_designation{
        font-size: 22px;
        margin-top: 10px;
    }
    .profile-info__id-number{
        margin-top: 10px;
    }

    @media screen and (min-width:650px){
        .profile-info__container{
            flex-direction: row;
            text-align: left;
        }
        .profile-info__picture {
            width: 100px;
            height: 100px;
            margin: 10px;
        }
    }
</style>
`;
