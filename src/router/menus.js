

import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, CreditCardIcon, PaperClipIcon, UserGroupIcon, SquaresPlusIcon, MegaphoneIcon, TruckIcon, BriefcaseIcon, RectangleGroupIcon, ExclamationTriangleIcon, TableCellsIcon, PuzzlePieceIcon, QueueListIcon, HandThumbUpIcon, UsersIcon, CommandLineIcon, CircleStackIcon, BuildingOffice2Icon, ChatBubbleLeftRightIcon, SwatchIcon } from '@heroicons/vue/24/outline'
import { ShoppingCartIcon, CurrencyDollarIcon, HomeModernIcon, BanknotesIcon, MapPinIcon, BuildingStorefrontIcon, KeyIcon, ClipboardDocumentListIcon, DocumentTextIcon, CubeIcon, RocketLaunchIcon, Square3Stack3DIcon, Cog8ToothIcon, FingerPrintIcon, BookOpenIcon, ListBulletIcon } from '@heroicons/vue/24/solid'

const menus = [
    [
       
       {
          name: 'Chart of Accounts',
          icon: ListBulletIcon,
          routeName: 'Chart of Accounts'
       },
       {
          name: 'Journal Entry',
          icon: ClipboardDocumentListIcon,
          routeName: 'Home'
       },
       {
        name: 'Payables',
        icon: BanknotesIcon,
        submenu: [
                {
                    name: 'Payees',
                    icon: UserGroupIcon,
                    routeName: 'Payees'
                },
                {
                    name: 'Request for Payments',
                    icon: ClipboardDocumentCheckIcon,
                    routeName: 'Home'
                }
            ]
        }
          
    ],
    [{
       name: 'Reports',
       icon: Square3Stack3DIcon,
       submenu: [{
          name: 'Inventory Stocks',
          icon: QueueListIcon,
          routeName: 'Home'
       }]
    }],
    [{
          name: 'System',
          icon: Cog8ToothIcon,
          submenu: [{
                name: 'Companies',
                icon: BuildingOffice2Icon,
                routeName: 'Home'
             },
             {
                name: 'Users',
                icon: UsersIcon,
                routeName: 'Home'
             },
             {
                name: 'Roles',
                icon: CommandLineIcon,
                routeName: 'Home'
             },
             {
                name: 'Database Backups',
                icon: CircleStackIcon,
                routeName: 'Home'
             }
 
 
          ]
       },
    ]
 
 ];

export default menus;