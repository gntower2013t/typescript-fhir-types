
            import { Type, success, failure, identity } from "io-ts";

            /**
             * A time during the day, with no date specified
             */
            export class timeType extends Type<string> {

                private static regexExp = /^([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?$/; 

                // readonly _tag: 'timeType' = 'timeType';

                constructor() {
                    super( 
                        /** a unique name for this codec */ 
                        "timeType",
                        /** a custom type guard */ 
                        (m): m is string => typeof m === "string" && timeType.regexExp.test(m.toString()) , 
                        /** succeeds if a value of type I can be decoded to a value of type A */ 
                        (m, c) => (this.is(m) ? success(m) : failure(m, c)),
                        /** converts a value of type A to a value of type O */
                        identity
                    )
                }
            }

            export const RTTI_time = new timeType(); 
        