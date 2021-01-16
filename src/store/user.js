import { action, makeObservable, observable, computed } from 'mobx'

import { student1, student2, teacher1, teacher2 } from '../data'

class User {

    constructor() {
        makeObservable(this,{

        })
    }

}

export default new User()