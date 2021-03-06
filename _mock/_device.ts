import { MockRequest } from '@delon/mock'

const data = [
    {
        id: "device-1",
        customerId: "CST-2",
        profile: "Medicard-F-03",
        status: [1]
    },
    {
        id: "device-2",
        customerId: "CST-2",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-3",
        customerId: "CST-2",
        profile: "Medicard-F-01",
        status: [1]
    },
    {
        id: "device-4",
        customerId: "CST-2",
        profile: "Medicard-F-06",
        status: [1]
    },
    {
        id: "device-5",
        customerId: "CST-2",
        profile: "Medicard-F-06",
        status: [1]
    },
    {
        id: "device-6",
        customerId: "CST-1",
        profile: "Medicard-F-202",
        status: [1]
    },
    {
        id: "device-7",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-8",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-9",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-10",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-11",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-12",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-13",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-14",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-15",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-16",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-17",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-18",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-19",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    },
    {
        id: "device-20",
        customerId: "CST-1",
        profile: "Medicard-F-02",
        status: [1]
    }
]

function genData(params: any): { total: number; list: any[] } {
    let ret = [...data];
    const pi = +params.pi;
    const ps = +params.ps;
    const start = (pi - 1) * ps;

    if (params.id) {
        ret = ret.filter((data) => data.id.indexOf(params.no) > -1);
    }

    if (params.customerId) {
        ret = ret.filter((data) => data.customerId.indexOf(params.customerId) > -1);
    }

    if (params.profile) {
        const order = params.profile === "ascend" ? 1 : -1
        ret = ret.sort(
            (a, b) => {
                if (a.profile < b.profile) return -1 * order
                if (a.profile > b.profile) return 1 * order
                return 0
            }
        )
    }
    return { total: ret.length, list: ret.slice(start, ps * pi) };
}
export const DEVICES = {
    '/devices': (req: MockRequest) => genData(req.queryString),
    // '/user/:id': (req: MockRequest) => list.find((w) => w.id === +req.params.id),
    // 'POST /user/:id': (req: MockRequest) => saveData(+req.params.id, req.body),
    // '/user/current': {
    //   name: 'Cipchk',
    //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    //   userid: '00000001',
    //   email: 'cipchk@qq.com',
    //   signature: '???????????????????????????',
    //   title: '????????????',
    //   group: '????????????????????????????????????????????????????????????????????????UED',
    //   tags: [
    //     {
    //       key: '0',
    //       label: '???????????????',
    //     },
    //     {
    //       key: '1',
    //       label: '????????????',
    //     },
    //     {
    //       key: '2',
    //       label: '???~',
    //     },
    //     {
    //       key: '3',
    //       label: '??????',
    //     },
    //     {
    //       key: '4',
    //       label: '????????????',
    //     },
    //     {
    //       key: '5',
    //       label: '????????????',
    //     },
    //   ],
    //   notifyCount: 12,
    //   country: 'China',
    //   geographic: {
    //     province: {
    //       label: '??????',
    //       key: '330000',
    //     },
    //     city: {
    //       label: '?????????',
    //       key: '330100',
    //     },
    //   },
    //   address: 'XX???XXX??? XX ???',
    //   phone: '??????-??????????????????',
    // },
    // 'POST /user/avatar': 'ok',
    // 'POST /login/account': (req: MockRequest) => {
    //   const data = req.body;
    //   if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'ng-alain.com') {
    //     return { msg: `Invalid username or password???admin/ng-alain.com???` };
    //   }
    //   return {
    //     msg: 'ok',
    //     user: {
    //       token: '123456789',
    //       name: data.userName,
    //       email: `${data.userName}@qq.com`,
    //       id: 10000,
    //       time: +new Date(),
    //     },
    //   };
    // },
    // 'POST /register': {
    //   msg: 'ok',
    // },
};