import {action, makeObservable, observable,computed} from 'mobx'

import { tests as data } from '../data'

class Test {
    tests = data
    listAnswers = observable.map();

    observableMap = observable.map();

    constructor() {
        makeObservable(this,{
            tests:observable,
            observableMap: observable,
            listAnswers: observable,

            setListAnswers:action,
            getListAnswers:computed,

            setMap: action,
            showMap: computed,
        })
    }

    setListAnswers (k,v) { this.listAnswers.set(k,v) }
    get getListAnswers() { return new Map(this.listAnswers.toJSON()) }




    setMap(key,value) {
        this.observableMap.set(key,value)
    }

     get showMap() {
        return new Map(this.observableMap.toJSON())
    }

}

export default new Test()