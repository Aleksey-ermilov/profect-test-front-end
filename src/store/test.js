import { action, makeObservable, observable, computed } from 'mobx'

import { tests as data } from '../data'

class Test {
    tests = data
    test = this.tests[0]
    listAnswers = observable.map();

    constructor() {
        makeObservable(this,{
            tests:observable,
            test: observable,
            listAnswers: observable,

            setTest: action,
            clearTest: action,

            setListAnswers:action,
            getListAnswers:computed,

        })
    }

    setListAnswers (k,v) { this.listAnswers.set(k,v) }
    get getListAnswers () { return new Map(this.listAnswers.toJSON()) }
    clearMap () { this.listAnswers.clear() }

    setTest (test) { this.test = test }
    clearTest () { this.test = this.tests[0] }

}

export default new Test()